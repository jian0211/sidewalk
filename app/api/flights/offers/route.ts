import { NextApiRequest } from 'next';
import { createFlightOffersPath, getToken } from '../../external-apis/amadeus';
import { Flights } from '@/store/fligths';
import { ResponseShoppingOffers } from '../../external-apis/type';
import { db } from '@/prisma/prisma';

export type TripType = 'roundTrip' | 'oneWay';

export type FlightTicketResponseData = {
  airline: {
    image: string;
    title: {
      ko: string;
      ja: string;
    };
    serviceType: string;
  };
  from: {
    iata: string;
    time: string;
  };
  to: {
    iata: string;
    time: string;
  };
  price: {
    yen: number;
    won: number;
  };
  flightTime: {
    hour: number;
    min: number;
  };
  tripType: TripType;
};

export async function POST(req: Request & NextApiRequest) {
  try {
    const flightInfoReq: Flights = await req.json();
    const token = (await getToken()) ?? throwError('there is not token');
    const currencyDummy = { kr: 1367, jp: 155 };

    const departureDate =
      flightInfoReq.dateType.departureDate ??
      throwError('there is not departureDate value');

    const returnDate = flightInfoReq.dateType.returnDate
      ? formatDate(flightInfoReq.dateType.returnDate)
      : undefined;

    const endPoint = createFlightOffersPath({
      destinationLocationCode: flightInfoReq.from,
      originLocationCode: flightInfoReq.to,
      maxPrice: flightInfoReq.flightCost.max + '',
      departureDate: formatDate(departureDate),
      returnDate,
      nonStop: flightInfoReq.tripType === 'oneWay' ? 'true' : 'false',
    });

    // Get flightOffers Data from AMADEUS
    const responseShoppingOffers = await fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.amadeus+json',
        Authorization: `Bearer ${token}`,
        Pragma: 'no-cache',
        Expires: '0',
        CacheControl: 'no-cache',
      },
    });
    const shoppingOffers: ResponseShoppingOffers =
      await responseShoppingOffers.json();

    // flight offers  airline iata
    const carrierCodes = Object.keys(shoppingOffers.dictionaries.carriers);

    const airlines = await db.airline.findMany({
      where: { iata: { in: carrierCodes } },
    });

    const flightOffers = shoppingOffers.data.flatMap<FlightTicketResponseData>(
      (shoppingOffer) => {
        const { price, itineraries } = shoppingOffer;
        const won = Math.floor(Number(price.total) * currencyDummy.kr);
        const yen = Math.floor(Number(price.total) * currencyDummy.jp);

        return itineraries.map(({ segments }) => {
          const { departure, arrival, carrierCode } = segments[0];

          const flightTime = getFlightTime(departure.at, arrival.at);
          const foundAirline = airlines.find(
            (airline) => airline.iata === carrierCode,
          );
          return {
            airline: {
              image: foundAirline?.imgTitle ?? '',
              serviceType: foundAirline?.seviceType ?? 'else',
              title: {
                ja:
                  foundAirline?.titleJa ??
                  shoppingOffers.dictionaries.carriers[carrierCode],
                ko:
                  foundAirline?.titleKo ??
                  shoppingOffers.dictionaries.carriers[carrierCode],
              },
            },
            flightTime,
            from: {
              iata: departure.iataCode,
              time: extractTime(departure.at),
            },
            price: { won, yen },
            to: {
              iata: arrival.iataCode,
              time: extractTime(arrival.at),
            },
            tripType: flightInfoReq.tripType,
          };
        });
      },
    );

    // 安い順
    const sortedFlightOffers = flightOffers.sort(
      (a, b) => a.price.yen - b.price.yen,
    );

    return Response.json({ responseData: sortedFlightOffers });
  } catch (err) {
    console.log('err', err);
  }
}

const throwError = (msg: string) => {
  throw new Error(msg);
};

const formatDate = (date: Date) => {
  return new Date(date)
    .toLocaleDateString('ja-jp', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replaceAll('/', '-');
};

const getFlightTime = (
  fromTime: string,
  toTime: string,
): FlightTicketResponseData['flightTime'] => {
  const _fromTime = new Date(fromTime);
  const _toTime = new Date(toTime);

  const differenceInMilliseconds = _toTime.getTime() - _fromTime.getTime();
  const totalHours = differenceInMilliseconds / 1000 / 60 / 60;
  const hour = Math.floor(totalHours);
  const min = Math.round((totalHours - hour) * 60);

  return { hour, min };
};

const extractTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

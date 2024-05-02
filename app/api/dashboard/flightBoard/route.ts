import { NextApiRequest } from 'next';
import { dummy } from './dummy';
import { db } from '@/prisma/prisma';
import { Locales } from '@/types/locale';
import { Prisma } from '@prisma/client';

type CheapestTicket = {
  from: AirportInfo;
  to: AirportInfo;
  imageTitle: string;
  price: {
    krw: number;
    jpy: number;
  };
};

type AirportInfo = {
  iata: string;
  time: string;
  jaTitle: string;
  koTitle: string;
};
type CheapestTicketInfoData = {
  location: {
    country: { [k in Locales]: string };
    location: { [k in Locales]: string };
    imgSrc: string;
  };
  tripType: TripType;
  fee: {
    krw: number;
    jpy: number;
  };
  from: CheapestTicketInfo;
  to: CheapestTicketInfo;
};
type CheapestTicketInfo = {
  date: string;
  day: Days;
  airline: {
    title: { [k in Locales]: string };
    iata: Prisma.AirlineCreateInput['iata'];
    imageSrc: Prisma.AirlineCreateInput['imgTitle'];
  };
  iata: Prisma.AirportCreateInput['iata'];
};
export type TripType = 'roundTrip' | 'oneWay';
export type Days = 'mon' | 'tue' | 'wen' | 'thr' | 'fri' | 'sat' | 'sun';
export type Destination = 'toKorea' | 'toJapan';
export type FlightBoardResponse = {
  averagePriceOfFlight: {
    [k in Destination]: { [k in 'jpy' | 'krw']: number };
  };
  cheapestTicketTomorrow: { [k in Destination]: CheapestTicket };
  cheapestTicketInfoData: CheapestTicketInfoData;
  recommendTravelDestination: Prisma.AirportCreateInput;
  dayOfTheWeekOfCheapTicket: {
    [k in 'cheapDay' | 'expensiveDay']: { [k in Destination]: Days };
  };
  airPriceVariationGraphData: {
    date: number;
    krw: number;
    jpy: number;
  }[];
};

export async function GET(req: Request & NextApiRequest) {
  try {
    const averagePriceOfFlight = await getAveragePriceOfFlight();

    const cheapestTicketTomorrow = await getCheapestTicketTomorrow();

    const cheapestTicketInfoData = await getCheapestTicketInfoData();

    const recommendTravelDestination = await getRecommendTravelDestination();

    const dayOfTheWeekOfCheapTicket = await getDayOfTheWeekOfCheapTicket();

    const airPriceVariationGraphData = await getAirPriceVariationGraphData();

    const response: FlightBoardResponse = {
      averagePriceOfFlight,
      airPriceVariationGraphData,
      cheapestTicketInfoData,
      cheapestTicketTomorrow,
      dayOfTheWeekOfCheapTicket,
      recommendTravelDestination,
    };
    return Response.json(response);
  } catch (err) {
    console.log('err', err);
  }
}

/**
 * 今年の基準の 韓国行、日本行 航空券の平均価格を取得
 */
const getAveragePriceOfFlight = async () => {
  return dummy.averagePriceOfFlight;
};

/**
 * 実際のデータがないのでDBからの全てを取得後でランダムでデータを渡す
 */
const getCheapestTicketTomorrow = async () => {
  const airlines = await db.airline.findMany();
  const airports = await db.airport.findMany();

  const japanAirports = airports.filter(
    ({ countryCode }) => countryCode === 'JP',
  );
  const koreaAirports = airports.filter(
    ({ countryCode }) => countryCode === 'KO',
  );

  const getRandomNumber = (limitLenght: number) =>
    Math.floor(Math.random() * limitLenght);

  const toKorea = {
    from: {
      iata: japanAirports[getRandomNumber(japanAirports.length)].iata,
      time: '09:15',
      jaTitle: japanAirports[getRandomNumber(japanAirports.length)].titleJa,
      koTitle: japanAirports[getRandomNumber(japanAirports.length)].titleKo,
    },
    to: {
      iata: koreaAirports[getRandomNumber(koreaAirports.length)].iata,
      time: '11:45',
      jaTitle: koreaAirports[getRandomNumber(koreaAirports.length)].titleJa,
      koTitle: koreaAirports[getRandomNumber(koreaAirports.length)].titleKo,
    },
    imageTitle: airlines[getRandomNumber(airlines.length)].imgTitle,
    price: {
      krw: 358400,
      jpy: 40500,
    },
  } satisfies CheapestTicket;

  const toJapan = {
    from: {
      iata: koreaAirports[getRandomNumber(koreaAirports.length)].iata,
      time: '13:45',
      jaTitle: koreaAirports[getRandomNumber(koreaAirports.length)].titleJa,
      koTitle: koreaAirports[getRandomNumber(koreaAirports.length)].titleKo,
    },
    to: {
      iata: japanAirports[getRandomNumber(japanAirports.length)].iata,
      time: '16:00',
      jaTitle: japanAirports[getRandomNumber(japanAirports.length)].titleJa,
      koTitle: japanAirports[getRandomNumber(japanAirports.length)].titleKo,
    },
    imageTitle: airlines[getRandomNumber(airlines.length)].imgTitle,
    price: {
      krw: 295000,
      jpy: 33300,
    },
  } satisfies CheapestTicket;

  return { toKorea, toJapan };
};

/**
 * 一旦、Jejuに行の場合でする。
 * 今後、実際のデータでする
 */
const getCheapestTicketInfoData = async () => {
  const JEJU_IATA = '7C';
  const DEPARTURE_AIRPORT_IATA = 'NRT';
  const ARRIVE_AIRORT_IATA = 'CJU';

  const airline =
    (await db.airline.findFirst({ where: { iata: JEJU_IATA } })) ??
    throwError('there is no airline');

  const departureAirport =
    (await db.airport.findFirst({
      where: { iata: DEPARTURE_AIRPORT_IATA },
    })) ?? throwError('there is no airport');

  const arriveAirport =
    (await db.airport.findFirst({
      where: { iata: ARRIVE_AIRORT_IATA },
    })) ?? throwError('there is no airport');

  return {
    location: dummy['cheapestTicketInfoData']['location'],
    tripType: 'roundTrip',
    fee: { jpy: 38400, krw: 34000 },
    from: {
      date: '5/12',
      day: 'tue',
      airline: {
        title: {
          ko: airline.titleKo,
          ja: airline.titleJa,
        },
        iata: airline.iata,
        imageSrc: airline.imgTitle,
      },
      iata: departureAirport.iata,
    },
    to: {
      date: '5/15',
      day: 'fri',
      iata: arriveAirport.iata,
      airline: {
        title: {
          ko: airline.titleKo,
          ja: airline.titleJa,
        },
        iata: airline.iata,
        imageSrc: airline.imgTitle,
      },
    },
  } satisfies CheapestTicketInfoData;
};

const throwError = (msg: string) => {
  throw new Error(msg);
};

/**
 * ランダム オススメところを渡す
 */
const getRecommendTravelDestination = async () => {
  const allAirports = await db.airport.findMany();
  const randomNumber = Math.floor(Math.random() * allAirports.length);
  return allAirports[randomNumber];
};

const getDayOfTheWeekOfCheapTicket = async () => {
  return {
    cheapDay: { toJapan: 'mon', toKorea: 'sat' },
    expensiveDay: { toJapan: 'sun', toKorea: 'tue' },
  } satisfies FlightBoardResponse['dayOfTheWeekOfCheapTicket'];
};

/**
 * グラフに使用するデータ
 * 現在はDummyデータを用いています。
 */
const getAirPriceVariationGraphData = async () => {
  const DEFAULT_TWO_WEEKS = 14;
  const getRandomPrice = (length: number) => {
    const DUMMY_EXCHANGE_RATE_JPY_TO_KRW = 0.9;
    const DUMMY_PRICE = 250000;
    return Array.from({ length }, () => {
      const randomPrice = DUMMY_PRICE + Math.floor(Math.random() * 9) * 10000;
      return {
        krw: randomPrice,
        jpy: randomPrice * DUMMY_EXCHANGE_RATE_JPY_TO_KRW,
      };
    });
  };

  const getSimpleDateNumbers = (length: number) => {
    const SEVEN_DAYS = 7;
    const currentDate = new Date();
    return Array.from({ length }, (_, i) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i - SEVEN_DAYS);
      return date.getDate();
    });
  };

  const priceOfYenWon = getRandomPrice(DEFAULT_TWO_WEEKS);
  const dates = getSimpleDateNumbers(DEFAULT_TWO_WEEKS);

  return dates.map((date, i) => ({
    date,
    krw: priceOfYenWon[i]['krw'],
    jpy: priceOfYenWon[i]['jpy'],
  }));
};

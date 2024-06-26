import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { AirportsIata } from '@/types/airport';
import { atom, selectorFamily, useRecoilState } from 'recoil';

export type AirportsIataWithDefault = AirportsIata | 'FROM' | 'TO';
export type TripType = 'roundTrip' | 'oneWay';
export type Flights = {
  from: Exclude<AirportsIataWithDefault, 'TO'>;
  to: Exclude<AirportsIataWithDefault, 'FROM'>;
  tripType: TripType;
  dateType: {
    departureDate: Date | null;
    returnDate: Date | null;
  };
  flightCost: {
    min: number;
    max: number;
  };
};

export type FlightsKey = keyof Flights;
export const FLIGHT_COST = {
  min: 0,
  max: 100000,
};
const flightsAtom = atom<Flights>({
  key: 'fligthsAtom',
  default: {
    from: 'FROM',
    to: 'TO',
    tripType: 'roundTrip',
    dateType: {
      departureDate: null,
      returnDate: null,
    },
    flightCost: FLIGHT_COST,
  },
});

export const useFlights = () => {
  const [flights, setFligths] = useRecoilState(flightsAtom);

  return {
    flights,
    setFligths,
  };
};

export const fetchFlightOffers = selectorFamily({
  key: 'fetchUserData',
  get: (flights: Flights) => async () => {
    try {
      const responseData = await getFlightsOffers(flights);
      return responseData.responseData;
    } catch (error) {
      throw new Error('flight API error');
    }
  },
});

export const getFlightsOffers = async (
  flight: Flights,
): Promise<{
  responseData: FlightTicketResponseData[];
}> => {
  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_URL
  }/flights/offers`;
  const flightsOffers = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(flight),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Pragma: 'no-cache',
      Expires: '0',
      CacheControl: 'no-cache',
    },
  });

  return flightsOffers.json();
};

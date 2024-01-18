import { AirportsIata } from '@/types/airport';
import { atom, useRecoilState } from 'recoil';

export type Flights = {
  from: AirportsIata | 'FROM'; // default is FROM
  to: AirportsIata | 'TO'; // default is TO
  tripType: 'roundTrip' | 'oneWay';
  departureDate: Date | null;
  returnDate: Date | null;
  flightCost: {
    min: number;
    max: number;
  };
};

export type FlightsKey = keyof Flights;

const flightsAtom = atom<Flights>({
  key: 'fligthsAtom',
  default: {
    from: 'FROM',
    to: 'TO',
    tripType: 'roundTrip',
    departureDate: null,
    returnDate: null,
    flightCost: {
      min: 0,
      max: 0,
    },
  },
});

export const useFlights = () => {
  const [fligths, setFligths] = useRecoilState(flightsAtom);

  return {
    fligths,
    setFligths,
  };
};

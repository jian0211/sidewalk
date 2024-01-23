import { AirportsIata } from '@/types/airport';
import { atom, useRecoilState } from 'recoil';
export type Flights = {
  from: AirportsIata | 'FROM'; // default is FROM
  to: AirportsIata | 'TO'; // default is TO
  tripType: 'roundTrip' | 'oneWay';
  dateType: {
    departureDate: Date;
    returnDate: Date;
  };
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
    dateType: {
      departureDate: new Date(),
      returnDate: new Date(),
    },
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

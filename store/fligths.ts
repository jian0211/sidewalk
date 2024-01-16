import { AirportsIata } from '@/types/airport';
import { atom } from 'recoil';

type FligthsAtom = {
  from: AirportsIata | null;
  to: AirportsIata | null; //
  tripType: 'roundTrip' | 'oneWay';
  departureDate: Date | null;
  returnDate: number | null;
  flightCost: {
    min: number;
    max: number;
  };
};

const fligthsAtom = atom<FligthsAtom>({
  key: 'fligthsAtom',
  default: {
    from: null,
    to: null,
    tripType: 'roundTrip', // oneWay
    departureDate: null, // today
    returnDate: null,
    flightCost: {
      min: 0,
      max: 100000,
    },
  },
});

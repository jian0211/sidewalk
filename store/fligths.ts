import { atom } from 'recoil';

type FligthsAtom = {
  from: 'From' | 'HDT'; // esle
  to: 'To' | 'esle'; //
  tripType: 'roundTrip' | 'oneWay';
  departureDate: null | Date; // today
  returnDate: null | number;
  flightCost: {
    min: number;
    max: number;
  };
};

const fligthsAtom = atom<FligthsAtom>({
  key: 'fligthsAtom',
  default: {
    from: 'From',
    to: 'To',
    tripType: 'roundTrip', // oneWay
    departureDate: null, // today
    returnDate: null,
    flightCost: {
      min: null,
      max: 100000,
    },
  },
});

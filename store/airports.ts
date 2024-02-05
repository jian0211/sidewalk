import { DUMMY_AIRPORTS_DATA } from '@/app/api/airports/airports';
import { atom, useRecoilValue } from 'recoil';

type AirportsList = typeof DUMMY_AIRPORTS_DATA;

const airportsListAtom = atom<AirportsList>({
  key: 'airportsListAtom',
  default: DUMMY_AIRPORTS_DATA,
});

export const useAiportsList = () => {
  const airportsList = useRecoilValue(airportsListAtom);
  return { airportsList };
};

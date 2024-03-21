import { AirlineSeviceType } from '@prisma/client';
import { atom, useRecoilState } from 'recoil';

export type AirlineServiceAtom = Exclude<AirlineSeviceType, 'else'> | 'all';

const airlineServiceAtom = atom<AirlineServiceAtom>({
  key: 'airlineCategory',
  default: 'all',
});

export const useAirlineService = () => {
  const [airlineService, setAirlineService] =
    useRecoilState(airlineServiceAtom);

  return {
    airlineServiceCategory: airlineService,
    setAirlineServiceCategory: (serviceType: AirlineServiceAtom) => {
      setAirlineService(serviceType);
    },
  };
};

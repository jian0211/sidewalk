import { DUMMY_AIRPORTS_DATA } from '@/app/api/airports/airports';
import { atom, useRecoilValue } from 'recoil';
import { AirportsIataWithDefault, Flights } from './fligths';
import { Locales } from '@/types/locale';
import { useLocale } from 'next-intl';

type AirportsList = typeof DUMMY_AIRPORTS_DATA;

const airportsListAtom = atom<AirportsList>({
  key: 'airportsListAtom',
  default: DUMMY_AIRPORTS_DATA,
});

type AirportObjType = Record<AirportsIataWithDefault, Record<Locales, string>>;

const DEFAULT_LOCATIONS: Pick<AirportObjType, 'FROM' | 'TO'> = {
  FROM: {
    ja: '出発地',
    ko: '출발지',
  },
  TO: {
    ja: '目的地',
    ko: '목적지',
  },
};

export const useAiportsList = () => {
  const locale = useLocale() as Locales;
  const airportsList = useRecoilValue(airportsListAtom);

  const airportsObj: AirportObjType = {
    ...[...airportsList.japan_airports, ...airportsList.korea_airports].reduce(
      (prev, { iata, ja_name, ko_name }) => ({
        ...prev,
        [iata]: {
          ja: ja_name,
          ko: ko_name,
        },
      }),
      {} as AirportObjType,
    ),
    ...DEFAULT_LOCATIONS,
  };
  const getBookingTitle = (iata: AirportsIataWithDefault = 'NRT') =>
    airportsObj[iata][locale];
  return {
    states: { airportsList },
    actions: { getBookingTitle },
  };
};

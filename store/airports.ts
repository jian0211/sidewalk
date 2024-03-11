import { atom, useRecoilValue } from 'recoil';
import { AirportsIataWithDefault, Flights } from './fligths';
import { Locales } from '@/types/locale';
import { useLocale } from 'next-intl';

export const DUMMY_AIRPORTS_DATA: {
  japan_airports: {
    iata: AirportsIataWithDefault;
    ja_name: string;
    ko_name: string;
  }[];
  korea_airports: {
    iata: AirportsIataWithDefault;
    ja_name: string;
    ko_name: string;
  }[];
} = {
  japan_airports: [
    {
      iata: 'CTS',
      ja_name: '札幌新千歳',
      ko_name: '신치토세',
    },
    {
      iata: 'AOJ',
      ja_name: '青森',
      ko_name: '아오모리',
    },
    {
      iata: 'KIJ',
      ja_name: '新潟',
      ko_name: '니이가타',
    },
    {
      iata: 'NRT',
      ja_name: '成田',
      ko_name: '나리타',
    },
    {
      iata: 'HND',
      ja_name: '羽田',
      ko_name: '하네다',
    },
    {
      iata: 'NGO',
      ja_name: '名古屋',
      ko_name: '나고야',
    },
  ],
  korea_airports: [
    {
      iata: 'ICN',
      ja_name: '仁川',
      ko_name: '인천',
    },
    {
      iata: 'PUS',
      ja_name: '金海',
      ko_name: '부산',
    },
    {
      iata: 'CJU',
      ja_name: '濟州',
      ko_name: '제주',
    },
    {
      iata: 'GMP',
      ja_name: '金浦',
      ko_name: '김포',
    },
    {
      iata: 'TAE',
      ja_name: '大邱',
      ko_name: '대구',
    },
  ],
};
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

import { Prisma } from '@prisma/client';
import { palette } from '../../../../styles/globalTokens.stylex';
import { AirportsForMarker } from '@/app/[locale]/(flights)/flights/page';
import { Point } from 'react-simple-maps';
import { Locales } from '@/types/locale';

type Marker = {
  name: string;
  coordinates: Point;
};

export const useMap = () => {
  const convertForMarkerUse = (datas: AirportsForMarker[], locale: Locales) => {
    return datas.map<Marker>(({ latitude, longitude, titleJa, titleKo }) => ({
      name: locale === 'ja' ? titleJa : titleKo,
      title: locale === 'ja' ? titleJa : titleKo,
      coordinates: [Number(longitude), Number(latitude)],
    }));
  };

  return {
    actions: { convertForMarkerUse },
  };
};

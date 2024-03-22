'use client';

import { Prisma } from '@prisma/client';
import { useAirline } from './useAirline';
import { Airlines } from './components';
import { Locales } from '@/types/locale';

type AirlineProps = {
  airlineList: Prisma.AirlineCreateInput[];
  locale: Locales;
};

export const Airline = ({ airlineList, locale }: AirlineProps) => {
  const { actions } = useAirline();
  const airlines = actions.filterAirlineType(airlineList);

  return (
    <Airlines.Body>
      <h1>AirlinesPage</h1>
      <div>
        {airlines.map((airline, i) => (
          <Airlines.FeaturePanel key={i}>
            <Airlines.CompanyImage imageTitle={airline.imgTitle} />
            <div>
              <div>{airline.titleEn}</div>
              <div>{locale === 'ja' ? airline.titleJa : airline.titleKo}</div>
              <div>{airline.iata + ' ' + airline.icao}</div>
              <div>{airline.link}</div>
              <div>{airline.seviceType}</div>
              <div>{airline.nationality}</div>
            </div>
          </Airlines.FeaturePanel>
        ))}
      </div>
    </Airlines.Body>
  );
};

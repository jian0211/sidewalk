'use client';

import { Flights } from './components';
import { GlobeMap } from './countryMap/Map';
import { useSearch } from '@/hooks/useSearh';
import { Locales } from '@/types/locale';
import { NoFlightData } from './noFlightData/NoFlightData';

type FlightsProps = {
  locale: Locales;
};

export const FlightsPage = ({ locale, ...props }: FlightsProps) => {
  const {
    states: { flights },
    actions: { handleSubmitSetFligths, toLocaleString },
  } = useSearch();
  return (
    <Flights.Container>
      <Flights.SlidingPanelBox>
        <Flights.ListBox>
          <NoFlightData />
        </Flights.ListBox>
      </Flights.SlidingPanelBox>
      <Flights.GlobeMapBox>
        <GlobeMap useGraticule />
      </Flights.GlobeMapBox>
    </Flights.Container>
  );
};

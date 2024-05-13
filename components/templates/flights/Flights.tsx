'use client';

import { Flights } from './components';
import { GlobeMap } from './countryMap/Map';
import { Locales } from '@/types/locale';
import { FlightTicket } from './flightTicket/FlightTicket';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { NoFlightData } from './noFlightData/NoFlightData';
import { useSearch } from '@/hooks/useSearh';
import { useRecoilValueLoadable } from 'recoil';
import { Flights as FlightsType, fetchFlightOffers } from '@/store/fligths';

type FlightListProps = {
  locale: Locales;
  flight: FlightsType;
};
type FlightsProps = {
  locale: Locales;
};

export const FlightsPage = ({ locale }: FlightsProps) => {
  const {
    states: { flights, isReadyToSearch },
  } = useSearch();

  return (
    <Flights.Container>
      <Flights.SlidingPanelBox>
        {!isReadyToSearch ? (
          <NoFlightData />
        ) : (
          <FlightList flight={flights} locale={locale} />
        )}
      </Flights.SlidingPanelBox>
      <Flights.GlobeMapBox>
        <GlobeMap useGraticule />
      </Flights.GlobeMapBox>
    </Flights.Container>
  );
};

const FlightList = ({ flight, locale }: FlightListProps) => {
  const t = useTranslatedWord('flights');
  const flightLoadable = useRecoilValueLoadable(fetchFlightOffers(flight));
  switch (flightLoadable.state) {
    case 'hasValue':
      return (
        <Flights.Wrapper>
          <Flights.IconWithTitle>{t('searchedTitle')}</Flights.IconWithTitle>
          <Flights.ListBox>
            {flightLoadable.contents.length > 0
              ? flightLoadable.contents.map((flightsOffer, i) => (
                  <FlightTicket
                    key={i}
                    flightTicketData={flightsOffer}
                    locale={locale}
                  />
                ))
              : 'no dasdfas'}
          </Flights.ListBox>
        </Flights.Wrapper>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw new Error('Error acquiring flight Offers data');
  }
};

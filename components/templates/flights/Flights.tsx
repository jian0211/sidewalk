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
import { EllipsisLoading } from '@/components/molecules/loading/EllipsisLoading';
import { Flex } from '@/components/atoms/Flex';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useSliding } from '@/store/sliding';

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
  const { setIsSliding } = useSliding();

  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsSliding(false);
  });

  return (
    <Flights.Container>
      <Flights.SlidingPanelBox ref={ref}>
        {!isReadyToSearch ? (
          <NoFlightData />
        ) : (
          <FlightList flight={flights} locale={locale} />
        )}
      </Flights.SlidingPanelBox>
      <Flights.GlobeMapBox>
        <GlobeMap />
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
      return <SearchingFlights />;
    case 'hasError':
      return <div>error</div>;
  }
};

const SearchingFlights: React.FC = () => {
  const t = useTranslatedWord('flights.loading');
  return (
    <Flights.Wrapper>
      <Flights.IconWithTitle>{t('title')}</Flights.IconWithTitle>
      <Flex
        flexProps={{ alignItems: 'center', justifyContent: 'center' }}
        sizeProps={{ height: '100%' }}
      >
        <EllipsisLoading sizeProps={{ width: '10px', height: '10px' }} />
      </Flex>
    </Flights.Wrapper>
  );
};

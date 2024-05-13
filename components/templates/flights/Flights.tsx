'use client';

import { Flights } from './components';
import { GlobeMap } from './countryMap/Map';
import { useSearch } from '@/hooks/useSearh';
import { Locales } from '@/types/locale';
import { FlightTicket } from './flightTicket/FlightTicket';
import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Flex } from '@/components/atoms/Flex';
import { NoFlightData } from './noFlightData/NoFlightData';

type FlightsProps = {
  locale: Locales;
  flightsOffers: FlightTicketResponseData[];
};

export const FlightsPage = ({ locale, flightsOffers }: FlightsProps) => {
  const {
    states: { flights, isSearched },
    actions: { handleSubmitSetFligths, toLocaleString },
  } = useSearch();
  const t = useTranslatedWord('flights');

  return (
    <Flights.Container>
      <Flights.SlidingPanelBox>
        <Flex
          bgColorProps={{ color: 'whiteSoftGray' }}
          sizeProps={{ width: '100%' }}
          paddingProps={{ paddingTop: '10px', paddingLeft: '10px' }}
        >
          {isSearched ? (
            <>
              <Flights.IconWithTitle>
                {t('searchedTitle')}
              </Flights.IconWithTitle>
              <Flights.ListBox>
                {flightsOffers.map((flightsOffer, i) => (
                  <FlightTicket
                    key={i}
                    flightTicketData={flightsOffer}
                    locale={locale}
                  />
                ))}
              </Flights.ListBox>
            </>
          ) : (
            <NoFlightData />
          )}
        </Flex>
      </Flights.SlidingPanelBox>
      <Flights.GlobeMapBox>
        <GlobeMap useGraticule />
      </Flights.GlobeMapBox>
    </Flights.Container>
  );
};

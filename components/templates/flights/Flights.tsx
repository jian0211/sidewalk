'use client';

import { Flights } from './components';
import { GlobeMap } from './countryMap/Map';
import { useSearch } from '@/hooks/useSearh';
import { Locales } from '@/types/locale';
import { NoFlightData } from './noFlightData/NoFlightData';
import { FlightTicket } from './flightTicket/FlightTicket';

type FlightsProps = {
  locale: Locales;
};

export const FlightsPage = ({ locale, ...props }: FlightsProps) => {
  const {
    states: { flights },
    actions: { handleSubmitSetFligths, toLocaleString },
  } = useSearch();

  const flightTicket = {
    airline: {
      image: '',
      title: {
        ko: '이스타항공',
        ja: '이스타항공',
      },
      serviceType: '저비용 항공사',
    },
    from: {
      iata: 'NRT',
      time: '11:30',
    },
    to: {
      iata: 'INC',
      time: '14:30',
    },
    price: {
      yen: 30000,
      won: 260000,
    },
    flightTime: {
      hour: 3,
      min: 30,
    },
    tripType: 'roundTrip',
  };
  return (
    <Flights.Container>
      <Flights.SlidingPanelBox>
        <Flights.ListBox>
          <FlightTicket flightTicketData={flightTicket} locale={locale} />
          {/* <NoFlightData /> */}
        </Flights.ListBox>
      </Flights.SlidingPanelBox>
      <Flights.GlobeMapBox>
        <GlobeMap useGraticule />
      </Flights.GlobeMapBox>
    </Flights.Container>
  );
};

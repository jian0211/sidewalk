import { Suspense } from 'react';
import { useAirports } from './useAirport';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';
import { AirportComp, Width } from './components';
import { AirportNavBar } from './AirportNavBar';
import { AirportList } from './AirportList';

type AirportsProps = {
  params: { locale: Locales; country: Country };
};

export const Airports = async (props: AirportsProps) => {
  const { country } = props.params;
  const { actions } = useAirports();
  const airports = await actions.getAirports(country);
  return (
    <AirportComp.Container>
      <Suspense fallback={`${country} loading...`}>
        <AirportNavBar country={country} airportsCount={airports.length} />
        <AirportList airportsList={airports} />
      </Suspense>
    </AirportComp.Container>
  );
};

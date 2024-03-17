import { Airports } from '@/components/templates/airport/Airport';
import { AirportDetail } from '@/components/templates/airport/AirportDetail';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';

type Iata = string;
export type PageProps = {
  params: { locale: Locales; slug: Country | Iata };
};
const AirportsListOfCountryPage = ({ params }: PageProps) => {
  if (params.slug === 'jp' || params.slug === 'ko')
    return (
      <Airports params={{ locale: params.locale, country: params.slug }} />
    );
  return (
    <AirportDetail params={{ locale: params.locale, iata: params.slug }} />
  );
};
export default AirportsListOfCountryPage;

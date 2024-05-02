import { Airports } from '@/components/templates/airport/Airport';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';

type Iata = string;
export type PageProps = {
  params: { locale: Locales; slug: Country | Iata };
};
const AirportsListOfCountryPage = async ({ params }: PageProps) => {
  return (
    <Airports
      params={{ locale: params.locale, country: params.slug as Country }}
    />
  );
};
export default AirportsListOfCountryPage;

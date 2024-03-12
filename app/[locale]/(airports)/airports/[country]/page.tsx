import { Airports } from '@/components/templates/airport/Airport';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';

export type PageProps = {
  params: { locale: Locales; country: Country };
};
const AirportsListOfCountryPage = (props: PageProps) => {
  return <Airports {...props} />;
};
export default AirportsListOfCountryPage;

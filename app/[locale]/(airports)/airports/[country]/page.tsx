import { Country } from '@/types/country';
import { Locales } from '@/types/locale';

type PageProps = {
  params: { locale: Locales; country: Country };
};
const AirportsListOfCountryPage = (props: PageProps) => {
  console.log('props', props.params.country);
  return <div>핼로 에[어포트]</div>;
};
export default AirportsListOfCountryPage;

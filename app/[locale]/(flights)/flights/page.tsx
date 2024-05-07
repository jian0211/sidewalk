import { FlightsPage } from '@/components/templates/flights/Flights';
import { Locales } from '@/types/locale';

type PageProps = { params: { locale: Locales } };

const Page = async ({ params }: PageProps) => {
  return <FlightsPage locale={params.locale} />;
};

export default Page;

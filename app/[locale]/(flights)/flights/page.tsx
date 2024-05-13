import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { FlightsPage } from '@/components/templates/flights/Flights';
import { Flights } from '@/store/fligths';
import { Locales } from '@/types/locale';

type PageProps = { params: { locale: Locales } };

const Page = async ({ params }: PageProps) => {
  return <FlightsPage locale={params.locale} />;
};

export default Page;

export const getFlightsOffers = async (
  flight: Flights,
): Promise<{
  responseData: FlightTicketResponseData[];
}> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/flights/offers`;
  const flightsOffers = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(flight),
    headers: {
      'content-type': 'application/json',
      Pragma: 'no-cache',
      Expires: '0',
      CacheControl: 'no-cache',
    },
  });

  return flightsOffers.json();
};

import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { FlightsPage } from '@/components/templates/flights/Flights';
import { Flights } from '@/store/fligths';
import { Locales } from '@/types/locale';

type PageProps = { params: { locale: Locales } };

const Page = async ({ params }: PageProps) => {
  const flightsOffers = (await getFlightsOffers()).responseData;
  return <FlightsPage locale={params.locale} flightsOffers={flightsOffers} />;
};

export default Page;

export const getFlightsOffers = async (): Promise<{
  responseData: FlightTicketResponseData[];
}> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/flights/offers`;
  const dummy: Flights = {
    from: 'ICN',
    to: 'NRT',
    dateType: {
      departureDate: new Date('2024-05-20'),
      returnDate: new Date('2024-05-25'),
    },
    tripType: 'roundTrip',
    flightCost: {
      max: 40000,
      min: 0,
    },
  };
  const flightsOffers = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dummy),
    headers: {
      'content-type': 'application/json',
      Pragma: 'no-cache',
      Expires: '0',
      CacheControl: 'no-cache',
    },
  });

  return flightsOffers.json();
};

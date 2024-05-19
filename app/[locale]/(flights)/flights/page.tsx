import { FlightTicketResponseData } from '@/app/api/flights/offers/route';
import { FlightsPage } from '@/components/templates/flights/Flights';
import { Flights } from '@/store/fligths';
import { Locales } from '@/types/locale';
import { Prisma } from '@prisma/client';

type PageProps = { params: { locale: Locales } };
export type AirportsForMarker = Pick<
  Prisma.AirportCreateInput,
  'titleJa' | 'titleKo' | 'longitude' | 'latitude'
>;

const Page = async ({ params }: PageProps) => {
  const airportsForMarker = await getAirportsForMarker();
  return (
    <FlightsPage locale={params.locale} airportsForMarker={airportsForMarker} />
  );
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

const getAirportsForMarker = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/airports`;
  const airports: Prisma.AirportCreateInput[] = await (await fetch(url)).json();
  const airportsForMarker: AirportsForMarker[] = airports.map(
    ({ titleJa, titleKo, latitude, longitude }) => ({
      titleJa,
      titleKo,
      latitude,
      longitude,
    }),
  );
  return airportsForMarker;
};

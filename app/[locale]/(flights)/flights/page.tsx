import { FlightsPage } from '@/components/templates/flights/Flights';
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

const getAirportsForMarker = async () => {
  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_ENV
  }/airports`;
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

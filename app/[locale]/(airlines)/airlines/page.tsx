import { Airline } from '@/components/templates/airline/Airline';
import { Locales } from '@/types/locale';
import { Prisma } from '@prisma/client';

type PageProps = { params: { locale: Locales } };

const AirlinesPage = async ({ params }: PageProps) => {
  const airlineList = await getAirlines();
  return <Airline airlineList={airlineList} />;
};

export default AirlinesPage;

const getAirlines = async (): Promise<Prisma.AirlineCreateInput[]> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/airlines`;
  console.log('getAirlines url', url);
  const airlines = await fetch(url);
  console.log('getAirlines airlines', airlines);
  return airlines.json();
};

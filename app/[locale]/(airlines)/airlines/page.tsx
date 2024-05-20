import { Airline } from '@/components/templates/airline/Airline';
import { Locales } from '@/types/locale';
import { Prisma } from '@prisma/client';

type PageProps = { params: { locale: Locales } };

const AirlinesPage = async ({ params }: PageProps) => {
  const airlineList = await getAirlines();
  return <Airline airlineList={airlineList} />;
};

export default AirlinesPage;

//: Promise<Prisma.AirlineCreateInput[]>
const getAirlines = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/airlines`;
    const responseAirlines = await fetch(url);
    if (!responseAirlines.ok) {
      throw new Error(
        `Failed to fetch: ${responseAirlines.status} ${responseAirlines.statusText}`,
      );
    }
    const text = await responseAirlines.text();
    const data = await JSON.parse(text);

    // const _airlines = await responseAirlines.json();
    return data.responseData; //_airlines.responseData;
  } catch (err: unknown) {
    console.log(err);
  }
};

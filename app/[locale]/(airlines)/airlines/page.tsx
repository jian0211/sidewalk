import { Airline } from '@/components/templates/airline/Airline';
import { Locales } from '@/types/locale';
import { Prisma } from '@prisma/client';
import { Suspense } from 'react';

type PageProps = { params: { locale: Locales } };

const AirlinesPage = async ({ params }: PageProps) => {
  const airlineList = await getAirlines();
  return (
    <Suspense fallback={` loading...`}>
      <Airline airlineList={airlineList} />
    </Suspense>
  );
};

export default AirlinesPage;

const getAirlines = async () => {
  try {
    const envValue = process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_URL;
    if (envValue === undefined) {
      throw new Error('airline, env value is not exist');
    }

    const url = `${envValue}/airlines`;
    const responseAirlines = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    if (!responseAirlines.ok) {
      throw new Error(
        `Failed to fetch: ${responseAirlines.status} ${responseAirlines.statusText}`,
      );
    }
    const airlines = await responseAirlines.json();
    const data = airlines.responseData;
    return data;
  } catch (err: unknown) {
    console.log(err);
  }
};

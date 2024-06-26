import { Country } from '@/types/country';
import { Prisma } from '@prisma/client';

export const useAirports = () => {
  const getAirports = async (
    country: Country,
  ): Promise<Prisma.AirportCreateInput[]> => {
    const url = `${
      process.env.NEXT_PUBLIC_BASE_URL ?? process.env.VERCEL_URL
    }/airports/${country}`;
    const airportsOfCountry = await fetch(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    return airportsOfCountry.json();
  };

  return {
    actions: {
      getAirports,
    },
  };
};

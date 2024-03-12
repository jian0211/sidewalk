import { Country } from '@/types/country';
import { Prisma } from '@prisma/client';

type Airports = `${'japan' | 'korea'}Airports`;
type CombinedAirports = {
  [k in Airports]: Prisma.AirportCreateInput[];
};

export const useAirports = () => {
  const getAirports = async (
    country: Country,
  ): Promise<Prisma.AirportCreateInput[]> => {
    const url = `${process.env.DEV_API_BASE_URL}/airports/${country}`;
    const airportsOfCountry = await fetch(url);
    return airportsOfCountry.json();
  };

  return {
    actions: {
      getAirports,
    },
  };
};

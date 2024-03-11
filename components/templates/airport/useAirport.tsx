import { Prisma } from '@prisma/client';

type Airports = `${'japan' | 'korea'}Airports`;
type CombinedAirports = {
  [k in Airports]: Prisma.AirportCreateInput[];
};

export const useAirport = async () => {
  const airports = await getAirports();
  const { japanAirports, koreaAirports } = airports.reduce<CombinedAirports>(
    (combinedAirports, airport) => {
      const airportKey: Airports =
        airport.countryCode === 'JP' ? 'japanAirports' : 'koreaAirports';
      combinedAirports[airportKey].push(airport);
      return combinedAirports;
    },
    {
      japanAirports: [],
      koreaAirports: [],
    },
  );
  return {
    japanAirport: {
      list: japanAirports,
      count: japanAirports.length,
    },
    koreaAirport: {
      list: koreaAirports,
      count: koreaAirports.length,
    },
  };
};

const getAirports = async (): Promise<Prisma.AirportCreateInput[]> => {
  const url = `${process.env.DEV_API_BASE_URL}/airports`;
  const airportsOfJapanAndKorea = await fetch(url);
  return airportsOfJapanAndKorea.json();
};

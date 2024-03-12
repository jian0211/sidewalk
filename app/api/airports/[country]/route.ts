import { Country } from '@/types/country';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest } from 'next';

const prisma = new PrismaClient();

type Params = {
  params: {
    country: Country;
  };
};

export async function GET(req: NextApiRequest, { params }: Params) {
  try {
    const airports = await getAirportsOfCountry(params.country);
    return Response.json(airports);
  } catch (err) {
    console.log('err', err);
  }
}

const getAirportsOfCountry = async (country: Country) => {
  return await prisma.airport.findMany({
    where: { countryCode: country === 'jp' ? 'JP' : 'KO' },
  });
};

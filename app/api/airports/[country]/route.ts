import { Country } from '@/types/country';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Params = {
  params: {
    country: Country;
  };
};

export async function GET(
  req: Request & NextApiRequest,
  res: Response & NextApiResponse,
  { params }: Params,
) {
  try {
    const airports = await getAirportsOfCountry(params.country);
    return Response.json(airports);
  } catch (err) {
    console.log('err', err);
    res.status(500).send({ error: 'Failed to fetch data' });
  }
}

const getAirportsOfCountry = async (country: Country) => {
  return await prisma.airport.findMany({
    where: { countryCode: country === 'jp' ? 'JP' : 'KO' },
  });
};

import { db } from '@/prisma/prisma';
import { Country } from '@/types/country';
import type { NextApiRequest } from 'next';

type Params = {
  params: {
    country: Country;
  };
};

export async function GET(req: Request & NextApiRequest, { params }: Params) {
  try {
    const airports = await getAirportsOfCountry(params.country);
    return Response.json(airports);
  } catch (err) {
    console.log('err', err);
  }
}

const getAirportsOfCountry = async (country: Country) => {
  return await db.airport.findMany({
    where: { countryCode: country === 'jp' ? 'JP' : 'KO' },
  });
};

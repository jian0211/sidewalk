import {
  JAPAN_AIRPORTS_DUMMY,
  KOREA_AIRPORTS_DUMMY,
} from '@/prisma/dummy/airports';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET(
  req: Request & NextApiRequest,
  res: Response & NextApiResponse,
) {
  console.log('/api/airports/dummy  Airports Dummy Data Setting Start.');
  try {
    const hasAirportsData = (await prisma.airport.findMany()).length > 0;

    if (!hasAirportsData) {
      const updatedAirports = await prisma.airport.createMany({
        data: [...KOREA_AIRPORTS_DUMMY, ...JAPAN_AIRPORTS_DUMMY],
      });
      console.log(`Airports Dummy Data saved ${updatedAirports.count}.`);
    }
    return Response.json('dummy Ok');
  } catch (err) {
    console.log('err', err);
    res.status(500).send({ error: 'Failed to fetch data' });
  }
  console.log('/api/airports/dummy  Airports Dummy Data Setting End.');
}

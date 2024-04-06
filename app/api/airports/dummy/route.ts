import {
  JAPAN_AIRPORTS_DUMMY,
  KOREA_AIRPORTS_DUMMY,
} from '@/prisma/dummy/airports';
import { db } from '@/prisma/prisma';
import { NextApiRequest } from 'next';

export async function GET(req: Request & NextApiRequest) {
  console.log('/api/airports/dummy  Airports Dummy Data Setting Start.');
  try {
    const hasAirportsData = (await db.airport.findMany()).length > 0;

    if (!hasAirportsData) {
      const updatedAirports = await db.airport.createMany({
        data: [...KOREA_AIRPORTS_DUMMY, ...JAPAN_AIRPORTS_DUMMY],
      });
      console.log(`Airports Dummy Data saved ${updatedAirports.count}.`);
    }
    return Response.json('dummy Ok');
  } catch (err) {
    console.log('err', err);
  }
  console.log('/api/airports/dummy  Airports Dummy Data Setting End.');
}

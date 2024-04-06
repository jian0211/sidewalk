import { db } from '@/prisma/prisma';
import { Prisma } from '@prisma/client';
import { NextApiRequest } from 'next';

export async function GET(req: Request & NextApiRequest) {
  try {
    const airportsData: Prisma.AirportCreateInput[] =
      await db.airport.findMany();
    return Response.json({ airportsData });
  } catch (err) {
    console.log('err', err);
  }
}

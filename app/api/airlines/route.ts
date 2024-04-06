import { db } from '@/prisma/prisma';
import { Prisma } from '@prisma/client';
import { NextApiRequest } from 'next';

export async function GET(req: Request & NextApiRequest) {
  console.log('Get airline Data');
  try {
    const airlines: Prisma.AirlineCreateInput[] = await db.airline.findMany();
    return Response.json(airlines);
  } catch (err) {
    console.log('err', err);
  }
  console.log('Done airline Data');
}

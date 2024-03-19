import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log('Get airline Data');
  try {
    const airlines: Prisma.AirlineCreateInput[] =
      await prisma.airline.findMany();
    return Response.json(airlines);
  } catch (err) {
    console.log('err', err);
  }
  console.log('Done airline Data');
}

import { Prisma, PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET(
  req: Request & NextApiRequest,
  res: Response & NextApiResponse,
) {
  console.log('Get airline Data');
  try {
    const airlines: Prisma.AirlineCreateInput[] =
      await prisma.airline.findMany();
    return Response.json(airlines);
  } catch (err) {
    console.log('err', err);
    res.status(500).send({ error: 'Failed to fetch data' });
  }
  console.log('Done airline Data');
}

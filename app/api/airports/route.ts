import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type ResponseData = {
  airportsData: Prisma.AirportCreateInput[];
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const airportsData: Prisma.AirportCreateInput[] =
      await prisma.airport.findMany();
    return res.json({ airportsData });
  } catch (err) {
    console.log('err', err);
    // res.status(500).send({ error: 'Failed to fetch data' });
  }
}

import { db } from '@/prisma/prisma';
import { Prisma } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: Request & NextApiRequest) {
  console.log('Get airline Data');
  try {
    const airlines: Prisma.AirlineCreateInput[] = await db.airline.findMany();
    return NextResponse.json({ responseData: airlines });
  } catch (err) {
    console.log('err', err);
    NextResponse.json(err);
  }
  console.log('Done airline Data');
}

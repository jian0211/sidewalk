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
    const datat = await getAmadeusToken();
    return Response.json(datat);
  } catch (err) {
    console.log('err', err);
    // res.status(500).send({ error: 'Failed to fetch data' });
  }
}

const getAmadeusToken = async () => {
  console.log('Start The getAmadeusToken ');
  const tokenUrl = process.env.AMADEUS_API_TOKEN_URL ?? throwError('URL');
  const clientId = process.env.AMADEUS_API_KEY ?? throwError('KEY');
  const clientSecret = process.env.AMADEUS_API_SECRET ?? throwError('SECRET');

  const token = await fetch(tokenUrl, {
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  });
  console.log('token', token.json());
  console.log('End The getAmadeusToken ');
  return token.json();
};

const throwError = (type: 'URL' | 'KEY' | 'SECRET'): never => {
  const defaultMessage = 'AMADEUS env process Error.';
  const messages: Record<typeof type, string> = {
    KEY: `${defaultMessage} there is any API KEY`,
    SECRET: `${defaultMessage} there is any API SECRET`,
    URL: `${defaultMessage} there is any Token URL`,
  };
  throw Error(messages[type]);
};

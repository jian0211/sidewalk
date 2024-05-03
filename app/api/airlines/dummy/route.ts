import { PrismaClient } from '@prisma/client';
import type { NextApiRequest } from 'next';
const prisma = new PrismaClient();

export async function GET(req: Request & NextApiRequest) {
  try {
    // await prisma.airline.createMany({ data: carriersDummy });
    const allAirline = await prisma.airline.findMany();
    console.log('allAirline', allAirline.length);

    const seen = new Set();
    for (const airline of allAirline) {
      if (seen.has(airline.iata)) {
        await prisma.airline.delete({
          where: { id: airline.id },
        });
      } else {
        seen.add(airline.iata);
      }
    }

    return Response.json('dummy Ok');
  } catch (err) {
    console.log('err', err);
  }
}

// type ResponseTokenData = {
//   type: string; //'amadeusOAuth2Token';
//   username: string; //'foo@bar.com';
//   application_name: string; //'BetaTest_foobar';
//   client_id: string; //'3sY9VNvXIjyJYd5mmOtOzJLuL1BzJBBp';
//   token_type: 'Bearer';
//   access_token: string; //'CpjU0sEenniHCgPDrndzOSWFk5mN';
//   expires_in: string; // 1799;
//   state: string; //'approved';
//   scope: string; //'';
// };

// const getAmadeusToken = async () => {
//   console.log('Start The getAmadeusToken ');
//   const tokenUrl = process.env.AMADEUS_API_TOKEN_URL ?? throwError('TOKEN_URL');
//   const clientId = process.env.AMADEUS_API_KEY ?? throwError('KEY');
//   const clientSecret = process.env.AMADEUS_API_SECRET ?? throwError('SECRET');

//   const tokenResponse = await fetch(tokenUrl, {
//     body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     method: 'POST',
//   });

//   const tokenData: ResponseTokenData = await tokenResponse.json();
//   console.log('token', tokenData);
//   console.log('End The getAmadeusToken ');
//   return tokenData.access_token;
// };

// const throwError = (type: 'TOKEN_URL' | 'KEY' | 'SECRET'): never => {
//   const defaultMessage = 'AMADEUS env process Error.';
//   const messages: Record<typeof type, string> = {
//     KEY: `${defaultMessage} there is any API KEY`,
//     SECRET: `${defaultMessage} there is any API SECRET`,
//     TOKEN_URL: `${defaultMessage} there is any Token URL`,
//   };
//   throw Error(messages[type]);
// };

// const getDummyAirlineData = async (token: string) => {
//   // dictionaries.carriers
//   // 1.
//   const originLocationCode = 'SEO';
//   const destinationLocationCode = 'TOK';

//   try {
//     const url = `${process.env.AMADEUS_BASE_URL}/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=2024-03-20&adults=1&nonStop=true&max=250`;
//     const data = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return data.json();
//   } catch (err) {
//     console.log('err', err);
//   }
// };

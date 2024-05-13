import { TokenResponse } from './type';

type RequestShoppingOffers = {
  originLocationCode: string; // * IATA code
  destinationLocationCode: string; // * IATA code
  departureDate: string; // * 2017-12-25 の形式
  returnDate?: string;
  maxPrice: string;
  nonStop: string;
};

const endPoints = {
  shopping: '/shopping/flight-offers',
};

const throwError = (msg: string) => {
  throw new Error(msg);
};

export const createFlightOffersPath = (params: RequestShoppingOffers) => {
  const baseUrl =
    process.env.AMADEUS_BASE_URL ??
    throwError('Not fount base-url of aamadeus');
  const {
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    maxPrice,
    nonStop,
  } = params;
  const currencyCode = 'USD';
  const adults = '1';
  const max = '20';

  const query = new URLSearchParams({
    originLocationCode,
    destinationLocationCode,
    departureDate,
    maxPrice,
    currencyCode,
    adults,
    nonStop,
    max,
  });

  // 往復の場合に
  if (returnDate) query.append('returnDate', returnDate);

  return `${baseUrl}${endPoints.shopping}?${query.toString()}`;
};

const tokenInfo: { accessToken: null | string } = {
  accessToken: null,
};

const fetchToken = async () => {
  const tokenUrl =
    process.env.AMADEUS_API_TOKEN_URL ??
    throwError('Not found tokenUrl of amadeus');

  const clientId =
    process.env.AMADEUS_API_KEY ?? throwError('Not found API_KEY of amadeus');

  const clientSecret =
    process.env.AMADEUS_API_SECRET ??
    throwError('Not found API_KEY of amadeus');

  const response = await fetch(tokenUrl, {
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
  });

  const data: TokenResponse = await response.json();
  return (tokenInfo.accessToken = data.access_token);
};

export const getToken = async () => {
  try {
    if (!tokenInfo.accessToken) {
      return await fetchToken();
    }
    return tokenInfo.accessToken;
  } catch (error) {
    console.log('error', error);
  }
};

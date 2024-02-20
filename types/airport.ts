type Airport = {
  name: string;
  iata: string;
  icao: string;
};
export type AirportsIata = JapanAirportIata | KoreaAirportIata;

export const JAPAN_AIR_PORTS = [
  'CTS',
  'AOJ',
  'KIJ',
  'NRT',
  'HND',
  'NGO',
  'KMQ',
  'KIX',
  'OKJ',
  'FUK',
  'OIT',
  'KOJ',
  'OKA',
] as const;

export const KOREA_AIR_PORTS = ['ICN', 'PUS', 'CJU', 'GMP', 'TAE'] as const;

export type JapanAirportIata = (typeof JAPAN_AIR_PORTS)[number];
export type KoreaAirportIata = (typeof KOREA_AIR_PORTS)[number];

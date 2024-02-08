const JAPAN_AIR_PORTS = {} as const;

type Airport = {
  name: string;
  iata: string;
  icao: string;
};
export type AirportsIata = JapanAirportIata | KoreaAirportIata;

export type JapanAirportIata =
  | 'CTS' // 札幌新千歳
  | 'AOJ' // 青森
  | 'KIJ' // 新潟
  | 'NRT' // 成田
  | 'HND' // 羽田
  | 'NGO' // 名古屋
  | 'KMQ' // 小松
  | 'KIX' // 大阪
  | 'OKJ' // 岡山
  | 'FUK' // 福岡
  | 'OIT' // 大分
  | 'KOJ' // 鹿児島
  | 'OKA'; // 那覇

export type KoreaAirportIata =
  | 'ICN' // 仁川
  | 'PUS' // 金海
  | 'CJU' // 濟州
  | 'GMP' // 金浦
  | 'TAE'; // 大邱

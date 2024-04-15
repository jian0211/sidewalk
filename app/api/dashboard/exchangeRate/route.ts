import { NextApiRequest } from 'next';

type ExchangeRateLiveResponse = {
  success: boolean;
  terms: string;
  privacy: string;
  timestamp: number;
  source: 'USD'; // default
  quotes: { USDJPY: number; USDKRW: number };
};
export type CurrenyType = {
  standardCurrency: 'USD';
  timestamp: number;
  quote: number;
  rateOfChange: string;
};
export type CurrentCurrenyResponse = {
  jpyCurrency: CurrenyType;
  krwCurrency: CurrenyType;
};

const dummyData: ExchangeRateLiveResponse = {
  success: true,
  terms: 'https://currencylayer.com/terms',
  privacy: 'https://currencylayer.com/privacy',
  timestamp: 1713002764,
  source: 'USD',
  quotes: { USDJPY: 153.27504, USDKRW: 1380.603789 },
};

const throwNotFoundCurrencyLayerData = (message: string) => {
  throw new Error(message);
};

/**
 * CURRENCY_LAYER から 現在の円とWonのデータを取得
 * 一ヶ月に100回が無料なのでダミーデータを使用
 */
const getExchangeRateData = async () => {
  const CURRENCY_CORDES = ['USD', 'JPY', 'KRW'];
  const accessKey =
    process.env.CURRENCY_LAYER_API_KEY ??
    throwNotFoundCurrencyLayerData('Currency layer Key not found');
  const endPoint =
    process.env.CURRENCY_END_POINT ??
    throwNotFoundCurrencyLayerData('Currency layer endpoint not found');
  const source = CURRENCY_CORDES[0];
  const currencies = CURRENCY_CORDES.slice(1).join(',');
  const url = `${endPoint}live?access_key=${accessKey}&source=${source}&currencies=${currencies}`;

  try {
    const liveExchangeRateData = dummyData ?? (await fetch(url)).json();
    return { liveExchangeRateData };
  } catch (error) {
    console.log('Failed to get current exchange rate : ', error);
    throw new Error('Failed to get current exchange rate information.');
  }
};

/**
 * 昨日の 円、Won の 為替レート情報取得
 * 実際のデータを取得するのは費用がかかるのでDummyデータでする
 */
const getYesterdayCurreny = () => {
  // ...DB通じるロジック
  const dummyData = { jpy: 155.2, krw: 1380.6 };

  // -5から 5までのRandom数学生成
  const randomNumber = Math.floor(Math.random() * 11) - 5;
  return {
    jpy: dummyData.jpy - randomNumber,
    krw: dummyData.krw - randomNumber,
  };
};

/**
 * 以前、現在のCurrenyの差を計算して渡す
 */
const getRateOfChage = (
  beforeData: { jpy: number; krw: number },
  currentData: { USDJPY: number; USDKRW: number },
) => {
  return {
    jpy: (beforeData.jpy - currentData.USDJPY).toFixed(2),
    krw: (beforeData.krw - currentData.USDKRW).toFixed(2),
  };
};

/**
 *
 */
export async function GET(req: Request & NextApiRequest) {
  try {
    const { liveExchangeRateData } = await getExchangeRateData();
    const yesterdayCurreny = getYesterdayCurreny();
    const rateOfChange = getRateOfChage(
      yesterdayCurreny,
      liveExchangeRateData.quotes,
    );
    const returnData: CurrentCurrenyResponse = {
      jpyCurrency: {
        standardCurrency: liveExchangeRateData.source,
        timestamp: liveExchangeRateData.timestamp * 1000,
        quote: liveExchangeRateData.quotes.USDJPY,
        rateOfChange: rateOfChange.jpy,
      },
      krwCurrency: {
        standardCurrency: liveExchangeRateData.source,
        timestamp: liveExchangeRateData.timestamp * 1000,
        quote: liveExchangeRateData.quotes.USDKRW,
        rateOfChange: rateOfChange.krw,
      },
    };
    return Response.json(returnData);
  } catch (err) {
    console.log('err', err);
  }
}

import { ExchangeRateLiveResponse } from './route';

const currenyForCurreny = {
  jpy: [
    {
      x: '2023/6',
      y: 139.9058,
    },
    {
      x: '2023/7',
      y: 144.3042,
    },
    {
      x: '2023/8',
      y: 143.3223,
    },
    {
      x: '2023/9',
      y: 146.0924,
    },
    {
      x: '2023/10',
      y: 148.445,
    },
    {
      x: '2023/11',
      y: 149.8575,
    },
    {
      x: '2023/12',
      y: 146.812,
    },
    {
      x: '2024/1',
      y: 141.1315,
    },
    {
      x: '2024/2',
      y: 148.375,
    },
    {
      x: '2024/3',
      y: 150.095,
    },
    {
      x: '2024/4',
      y: 151.543,
    },
    {
      x: '2024/5',
      y: 154.625,
    },
  ],
  krw: [
    {
      x: '2023/6',
      y: 1306.25,
    },
    {
      x: '2023/7',
      y: 1316.151,
    },
    {
      x: '2023/8',
      y: 1289.4,
    },
    {
      x: '2023/9',
      y: 1318.45,
    },
    {
      x: '2023/10',
      y: 1360.065,
    },
    {
      x: '2023/11',
      y: 1335.115,
    },
    {
      x: '2023/12',
      y: 1298.3335,
    },
    {
      x: '2024/1',
      y: 1294.5,
    },
    {
      x: '2024/2',
      y: 1329.29,
    },
    {
      x: '2024/3',
      y: 1331.1,
    },
    {
      x: '2024/4',
      y: 1351.2,
    },
    {
      x: '2024/5',
      y: 1374.495,
    },
  ],
};

const exchangeRateLiveResponse: ExchangeRateLiveResponse = {
  success: true,
  terms: 'https://currencylayer.com/terms',
  privacy: 'https://currencylayer.com/privacy',
  timestamp: 1713002764,
  source: 'USD',
  quotes: { USDJPY: 153.27504, USDKRW: 1380.603789 },
};

export const dummyData = {
  currenyForCurreny,
  exchangeRateLiveResponse,
};

import { CurrentCurrenyResponse } from '@/app/api/dashboard/exchangeRate/route';
import { useExchangeRateCountry } from '@/store/exchangeRateCountry';
import { useExchangeRateDateRage } from '@/store/exchangeRateDateRange';
import { Serie } from '@nivo/line';

type Props = {
  currenyGraphData: CurrentCurrenyResponse['currenyGraphData'];
};

export const useExchangeRateGroph = (graphDatas: Props) => {
  const { country } = useExchangeRateCountry();
  const { dateRage } = useExchangeRateDateRage();

  const convertContryCode: Record<typeof country, 'jpy' | 'krw'> = {
    japan: 'jpy',
    korea: 'krw',
  };

  // make date filter
  const filterdGraphData: Serie[] = [
    {
      id: country,
      data: graphDatas.currenyGraphData[convertContryCode[country]].map(
        (data) => ({
          x: data.x,
          y: data.y.toFixed(2),
        }),
      ),
    },
  ];
  return {
    filterdGraphData,
  };
};

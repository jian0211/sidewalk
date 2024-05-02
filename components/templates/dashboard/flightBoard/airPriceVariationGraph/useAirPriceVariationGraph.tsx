import { AirPriceVariationGraphData } from './AirPriceVariationGraph';
import { Locales } from '@/types/locale';
import { FlightBoardResponse } from '@/app/api/dashboard/flightBoard/route';

export type Destination = 'korea' | 'japan';
type FormatDateSuffixForGraphDataProps = {
  target: FlightBoardResponse['airPriceVariationGraphData'];
  locale: Locales;
};
type DateSuffix = '일' | '日';

export const useAirPriceVariationGraph = () => {
  /**
   *  グラフデータのため、APIから取得したデータを架空。
   */
  const formatDateSuffixForGraphData = ({
    target,
    locale,
  }: FormatDateSuffixForGraphDataProps) => {
    const localeSuffixMap: Record<Locales, DateSuffix> = {
      ja: '日',
      ko: '일',
    };
    return target.map<AirPriceVariationGraphData>((data) => ({
      date: data.date + localeSuffixMap[locale],
      jpy: data.jpy,
      krw: data.krw,
    }));
  };
  return {
    actions: {
      formatDateSuffixForGraphData,
    },
  };
};

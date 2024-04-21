import { atom, useRecoilState } from 'recoil';

type ExchangeRateexchangeRateDateRageAtom = 'year' | 'month' | 'day';

const exchangeRateexchangeRateDateRageAtom =
  atom<ExchangeRateexchangeRateDateRageAtom>({
    key: 'globalEditAtom',
    default: 'year',
  });

export const useExchangeRateDateRage = () => {
  const [exchangeRateDateRage, setExchangeRateDateRage] = useRecoilState(
    exchangeRateexchangeRateDateRageAtom,
  );
  return {
    dateRage: exchangeRateDateRage,
    setDateRage: setExchangeRateDateRage,
  };
};

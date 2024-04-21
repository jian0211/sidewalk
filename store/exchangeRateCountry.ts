import { atom, useRecoilState } from 'recoil';

type ExchangeRateCountryAtom = 'japan' | 'korea';

const exchangeRateCountryAtom = atom<ExchangeRateCountryAtom>({
  key: 'globalEditAtom',
  default: 'japan',
});

export const useExchangeRateCountry = () => {
  const [exchangeRateCountry, setExchangeRateCountry] = useRecoilState(
    exchangeRateCountryAtom,
  );
  return {
    country: exchangeRateCountry,
    setCountry: setExchangeRateCountry,
  };
};

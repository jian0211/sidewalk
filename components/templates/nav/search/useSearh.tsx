import { Flights, FlightsKey, useFlights } from '@/store/fligths';
import { ValueOf } from '@/types/common';
import { useLocale } from 'next-intl';

export const useSearch = () => {
  const { flights, setFligths } = useFlights();
  const locale = useLocale();

  const handleClickSetFligths =
    <T extends FlightsKey>(tripType: T) =>
    (value: ValueOf<T>) =>
    () => {
      setFligths((prev) => ({
        ...prev,
        [tripType]: value,
      }));
    };

  const handleSubmitSetFligths = (fligths: Flights) => {
    setFligths(fligths);
  };

  const toLocaleString = (value: number) => {
    const _value = locale === 'ko' ? value * 10 : value * 1;
    return _value.toLocaleString();
  };

  return {
    states: {
      flights,
    },
    actions: {
      handleClickSetFligths,
      handleSubmitSetFligths,
      toLocaleString,
    },
  };
};

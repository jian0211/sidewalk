import { Flights, FlightsKey, useFlights } from '@/store/fligths';
import { useSliding } from '@/store/sliding';
import { ValueOf } from '@/types/common';
import { useLocale } from 'next-intl';
import { redirect, useRouter } from 'next/navigation';

export const useSearch = () => {
  const { flights, setFligths } = useFlights();
  const locale = useLocale();
  const { setIsSliding } = useSliding();
  const router = useRouter();

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
    if (isReadyToSearch()) {
      setIsSliding(true);
      router.push('/flights');
    }
  };

  const toLocaleString = (value: number) => {
    const _value = locale === 'ko' ? value * 10 : value * 1;
    return _value.toLocaleString();
  };

  const isReadyToSearch = () => {
    if (flights.from === 'FROM') return false;
    if (flights.to === 'TO') return false;
    if (flights.dateType.departureDate === null) return false;
    return true;
  };

  return {
    states: {
      flights,
      isReadyToSearch: isReadyToSearch(),
    },
    actions: {
      handleClickSetFligths,
      handleSubmitSetFligths,
      toLocaleString,
    },
  };
};

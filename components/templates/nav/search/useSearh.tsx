import { FlightsKey, useFlights } from '@/store/fligths';
import { ValueOf } from '@/types/common';

export const useSearch = () => {
  const { fligths, setFligths } = useFlights();

  const handleClickSetFligths =
    <T extends FlightsKey>(tripType: T) =>
    (value: ValueOf<FlightsKey>) =>
    () => {
      setFligths((prev) => ({
        ...prev,
        [tripType]: value,
      }));
    };

  return {
    states: {
      fligths,
    },
    actions: {
      handleClickSetFligths,
    },
  };
};

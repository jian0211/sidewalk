import { Flights, FlightsKey, useFlights } from '@/store/fligths';
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

  const handleSubmitSetFligths = (fligths: Flights) => {
    setFligths(fligths);
  };
  return {
    states: {
      fligths,
    },
    actions: {
      handleClickSetFligths,
      handleSubmitSetFligths,
    },
  };
};

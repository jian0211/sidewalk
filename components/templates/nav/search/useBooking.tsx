import { AirportsIataWithDefault } from '@/store/fligths';
import { JAPAN_AIR_PORTS } from '@/types/airport';
import { useState } from 'react';

type Country = 'japan' | 'korea';
export const useBooking = () => {
  const [selectCountry, setSelectCountry] = useState<Country>('japan');

  const isDisabled = (
    airportIataData: AirportsIataWithDefault,
    country: Country,
  ) => {
    if (airportIataData === 'FROM' || airportIataData === 'TO') return false;
    const hasJapanAirport = JAPAN_AIR_PORTS.find(
      (jaAirport) => jaAirport === airportIataData,
    );
    if (country === 'japan' && hasJapanAirport) {
      return true;
    }
    if (country === 'korea' && !hasJapanAirport) {
      return true;
    }
    return false;
  };
  const isCurrentCountry = (country: Country) => selectCountry === country;
  return {
    states: {
      selectCountry,
    },
    actions: {
      handleSelectCountry: (country: Country) => {
        setSelectCountry((prev) => {
          if (prev === country) return prev;
          return country;
        });
      },
      isCurrentCountry,
      isDisabled,
    },
  };
};

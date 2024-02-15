import { JapanAirportIata } from '@/types/airport';
import { useState } from 'react';

type Country = 'japan' | 'korea';
export const useBooking = () => {
  const [selectCountry, setSelectCountry] = useState<Country>('japan');
  const isJapanAirportIata = (code: string): code is JapanAirportIata => true;
  // const checkedTravelCountry = (point: AirportsIataWithDefault) => {
  //   if (point === 'FROM' || isJapanAirportIata(point)) {
  //     return 'japan';
  //   }
  //   return 'korea';
  // };
  return {
    states: {
      selectCountry,
    },
    actions: {
      // checkedTravelCountry,
      handleSelectCountry: (country: Country) => {
        setSelectCountry((prev) => {
          if (prev === country) return prev;
          return country;
        });
      },
    },
  };
};

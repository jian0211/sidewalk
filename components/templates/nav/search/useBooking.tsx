'use client';
import { AirportsIataWithDefault, Flights } from '@/store/fligths';
import { AirportsIata, JAPAN_AIR_PORTS } from '@/types/airport';
import { useState } from 'react';

type Country = 'japan' | 'korea';
export const useBooking = () => {
  const [selectCountry, setSelectCountry] = useState<Country>('japan');

  const isIncludeJapanIata = (iata: AirportsIata) => {
    const hasJapanAirport = JAPAN_AIR_PORTS.find(
      (jaAirport) => jaAirport === iata,
    );
    return hasJapanAirport ? true : false;
  };

  const isDisabled = (
    airportIataData: AirportsIataWithDefault,
    country: Country,
  ) => {
    if (airportIataData === 'FROM' || airportIataData === 'TO') return false;
    const hasJapanAirport = isIncludeJapanIata(airportIataData);
    if (country === 'japan' && hasJapanAirport) {
      return true;
    }
    if (country === 'korea' && !hasJapanAirport) {
      return true;
    }
    return false;
  };
  const isCurrentCountry = (country: Country) => selectCountry === country;

  const getSwapFromTo = (flights: Flights) => {
    const from: Flights['from'] = flights.to === 'TO' ? 'FROM' : flights.to;
    const to: Flights['to'] = flights.from === 'FROM' ? 'TO' : flights.from;
    if (from !== 'FROM' && isIncludeJapanIata(from)) {
      setSelectCountry('japan');
    }
    if (to !== 'TO' && isIncludeJapanIata(to)) {
      setSelectCountry('korea');
    }
    return { from, to };
  };

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
      getSwapFromTo,
    },
  };
};

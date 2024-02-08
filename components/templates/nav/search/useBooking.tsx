import { AirportsIataWithDefault } from '@/store/fligths';
import { JapanAirportIata } from '@/types/airport';

export const useBooking = () => {
  const isJapanAirportIata = (code: string): code is JapanAirportIata => true;
  const checkedTravelCountry = (point: AirportsIataWithDefault) => {
    if (point === 'FROM' || isJapanAirportIata(point)) {
      return 'japan';
    }
    return 'korea';
  };
  return {
    states: {},
    actions: {
      checkedTravelCountry,
    },
  };
};

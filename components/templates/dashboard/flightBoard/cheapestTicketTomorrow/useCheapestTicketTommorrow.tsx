import { useState } from 'react';
import { Destination } from '../dayOfTheWeekOfCheapTicket/DayOfTheWeekOfCheapTicket';

export const useCheapestTicketTommorrow = () => {
  const [destination, setDestination] = useState<Destination>('toJapan');

  const isDestination = (value: string) => {
    return value === 'toKorea' || value === 'toJapan';
  };

  const getDestination = (eventValue: string) => {
    if (!isDestination(eventValue)) {
      throw new Error('This is not destination type data in event');
    }
    return eventValue as Destination;
  };

  return {
    states: {
      destination,
    },
    actions: {
      setDestination: (value: string) => setDestination(getDestination(value)),
    },
  };
};

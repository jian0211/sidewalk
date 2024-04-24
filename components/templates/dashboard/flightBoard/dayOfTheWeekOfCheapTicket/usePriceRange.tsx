import { useState } from 'react';

export type PriceRange = 'expensive' | 'cheap';

export const usePriceRange = () => {
  const [priceRange, setPriceRange] = useState<PriceRange>('cheap');

  return {
    states: {
      priceRange,
    },
    actions: {
      setPriceRange,
    },
  };
};

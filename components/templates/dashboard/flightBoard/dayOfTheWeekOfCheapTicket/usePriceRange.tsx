import { useState } from 'react';

export type PriceRange = 'expensive' | 'cheap';

export const usePriceRangeSelecter = () => {
  const [priceRangeSelecter, setPriceRangeSelecter] =
    useState<PriceRange>('cheap');

  return {
    states: {
      priceRangeSelecter,
    },
    actions: {
      setPriceRangeSelecter,
    },
  };
};

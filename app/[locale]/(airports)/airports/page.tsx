import { Airports } from '@/components/templates/airport/Airport';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Airports | Sidewalk',
};

export const AirportsPage = () => {
  return (
    <Suspense fallback={'loading'}>
      <Airports />
    </Suspense>
  );
};
export default AirportsPage;

import { Airports } from '@/components/templates/airport/Airport';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airports | Sidewalk',
};

const AirportsPage = () => {
  return <Airports />;
};
export default AirportsPage;

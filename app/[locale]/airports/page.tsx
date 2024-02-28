import Airport from '@/components/templates/airport/Airport';

type AirportPageProps = React.ComponentPropsWithoutRef<'section'>;

const AirportPage = (props: AirportPageProps) => {
  return <Airport {...props} />;
};

export default AirportPage;

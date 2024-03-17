import { Locales } from '@/types/locale';

type AirportDetailProps = {
  params: { locale: Locales; iata: string };
};

export const AirportDetail: React.FC<AirportDetailProps> = (props) => {
  return <div>airport detail page</div>;
};

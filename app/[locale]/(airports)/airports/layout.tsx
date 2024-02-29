import { AirportsLayoutTitle } from '@/components/templates/airport/Airport';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslatedWord('nav.pageTitle');
  return (
    <>
      <AirportsLayoutTitle>{t('airports')}</AirportsLayoutTitle>
      {children}
    </>
  );
}

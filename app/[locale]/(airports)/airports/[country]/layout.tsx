import {
  AirportsLayoutContainer,
  AirportsLayoutLink,
  AirportsLayoutTitle,
} from '@/components/templates/airport/Airport';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { LayoutProps } from '../../../layout';
import { path } from '@/types/path';
import { Country } from '@/types/country';

export default function Layout({ children }: LayoutProps) {
  const t = useTranslatedWord('nav.pageTitle');
  const getUrl = (country: Country) => `${path.airports}/${country}`;

  return (
    <>
      <AirportsLayoutContainer>
        <AirportsLayoutTitle>{t('airports')}</AirportsLayoutTitle>
        <AirportsLayoutLink href={getUrl('jp')} title="일본" />
        <AirportsLayoutLink href={getUrl('ko')} title="한국" />
      </AirportsLayoutContainer>
      {children}
    </>
  );
}

'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Country } from '@/types/country';
import { path } from '@/types/path';
import Link from 'next/link';
import { AirportComp } from './components';

type AirportNavBarProps = React.ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
  country: Country;
};

export const AirportNavBar = (props: AirportNavBarProps) => {
  const { airportsCount = 0, country, ...rest } = props;
  const t = useTranslatedWord('airports.info');
  const getUrl = (country: Country) => `${path.airports}/${country}`;

  return (
    <AirportComp.InfoBar {...rest}>
      <AirportComp.CountryButton isSelected={props.country === 'jp'}>
        <Link href={getUrl('jp')}>{t('japan')}</Link>
      </AirportComp.CountryButton>
      <AirportComp.CountryButton isSelected={props.country === 'ko'}>
        <Link href={getUrl('ko')}>{t('korea')}</Link>
      </AirportComp.CountryButton>
      <AirportComp.Text>
        {t('count')} : {airportsCount}
      </AirportComp.Text>
      <AirportComp.Text>{t('updatedAt')} : 2024/2/11</AirportComp.Text>
    </AirportComp.InfoBar>
  );
};

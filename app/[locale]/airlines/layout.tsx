'use client';

import { Airlines } from '@/components/templates/airline/components';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { useAirlineService, AirlineServiceAtom } from '@/store/airlineService';

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslatedWord('airlines.layout');
  const { airlineServiceCategory, setAirlineServiceCategory } =
    useAirlineService();
  const handleClickChangeCategory = (serviceType: AirlineServiceAtom) =>
    setAirlineServiceCategory(serviceType);
  const isCurrentCategory = (serviceType: AirlineServiceAtom) =>
    airlineServiceCategory === serviceType;

  return (
    <section style={{ padding: '0 2rem' }}>
      <Airlines.CategoryContainer>
        <Airlines.CategoryButton
          isSelected={isCurrentCategory('all')}
          onClick={() => handleClickChangeCategory('all')}
        >
          {t('all')}
        </Airlines.CategoryButton>
        <Airlines.CategoryButton
          isSelected={isCurrentCategory('lcc')}
          onClick={() => handleClickChangeCategory('lcc')}
        >
          {t('lcc')}
        </Airlines.CategoryButton>
        <Airlines.CategoryButton
          isSelected={isCurrentCategory('fsc')}
          onClick={() => handleClickChangeCategory('fsc')}
        >
          {t('fsc')}
        </Airlines.CategoryButton>
        <Airlines.CategoryButton
          isSelected={isCurrentCategory('hsc')}
          onClick={() => handleClickChangeCategory('hsc')}
        >
          {t('hsc')}
        </Airlines.CategoryButton>
      </Airlines.CategoryContainer>
      {children}
    </section>
  );
}

'use client';

import { Airline } from '@/components/templates/airline/Airline';
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
    <section>
      <Airline.CategoryContainer>
        <Airline.CategoryButton
          isSelected={isCurrentCategory('all')}
          onClick={() => handleClickChangeCategory('all')}
        >
          {t('all')}
        </Airline.CategoryButton>
        <Airline.CategoryButton
          isSelected={isCurrentCategory('lcc')}
          onClick={() => handleClickChangeCategory('lcc')}
        >
          {t('lcc')}
        </Airline.CategoryButton>
        <Airline.CategoryButton
          isSelected={isCurrentCategory('fsc')}
          onClick={() => handleClickChangeCategory('fsc')}
        >
          {t('fsc')}
        </Airline.CategoryButton>
        <Airline.CategoryButton
          isSelected={isCurrentCategory('hsc')}
          onClick={() => handleClickChangeCategory('hsc')}
        >
          {t('hsc')}
        </Airline.CategoryButton>
      </Airline.CategoryContainer>
      {children}
    </section>
  );
}

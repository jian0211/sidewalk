'use client';

import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Prisma } from '@prisma/client';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { useAirports } from './useAirport';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';
import { AirportComp, Width } from './components';
import { path } from '@/types/path';
import Link from 'next/link';

type AirportsProps = {
  params: { locale: Locales; country: Country };
};
type AirportNavBarProps = ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
  country: Country;
};

type AirportListProps = {
  airportsList: Prisma.AirportCreateInput[];
};

export const Airports = async (props: AirportsProps) => {
  const { country } = props.params;
  const { actions } = useAirports();
  const airports = await actions.getAirports(country);
  return (
    <AirportComp.Container>
      <Suspense fallback={`${country} loading...`}>
        <AirportNavBar country={country} airportsCount={airports.length} />
        <AirportList airportsList={airports} />
      </Suspense>
    </AirportComp.Container>
  );
};

const AirportNavBar = (props: AirportNavBarProps) => {
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

export const AirportList = ({ airportsList }: AirportListProps) => {
  const t = useTranslatedWord('airports.header.category');
  const columnsWidth: Width[] = [
    '50px',
    '200px',
    '200px',
    '100%',
    '100px',
    '100px',
  ];
  return (
    <AirportComp.TableContanier>
      <AirportComp.TableHeader
        coloums={[
          { title: 'No', width: columnsWidth[0] },
          { title: t('title'), width: columnsWidth[1] },
          { title: t('identifyingCharacter'), width: columnsWidth[2] },
          { title: t('address'), width: columnsWidth[3] },
          { title: t('weather'), width: columnsWidth[4] },
          { title: t('link'), width: columnsWidth[5] },
        ]}
      />

      <Table.Body useScroll>
        {airportsList.map((airport, i) => (
          <AirportComp.TableRow
            key={i}
            coloums={[
              { width: columnsWidth[0], element: i + 1 },
              {
                width: columnsWidth[1],
                element: (
                  <AirportComp.DetailLink
                    href={(airport.iata || airport.icao).toLowerCase()}
                  >
                    <div>{airport.titleJa}</div>
                    <div>{airport.titleKo}</div>
                  </AirportComp.DetailLink>
                ),
              },
              { width: columnsWidth[2], element: airport.iata || airport.icao },
              { width: columnsWidth[3], element: airport.address },
              {
                width: columnsWidth[4],
                element: (
                  <AirportComp.SuspeneseWeatherIcon
                    lat={airport.latitude}
                    lon={airport.longitude}
                  />
                ),
              },
              {
                width: columnsWidth[5],
                element: <AirportComp.LinkIcon link={airport.link} />,
              },
            ]}
          />
        ))}
      </Table.Body>
    </AirportComp.TableContanier>
  );
};

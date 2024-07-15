'use client';

import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { AirportComp, Width } from './components';
import { Prisma } from '@prisma/client';

type AirportListProps = {
  airportsList: Prisma.AirportCreateInput[];
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

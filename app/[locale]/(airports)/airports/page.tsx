import {
  AirportsContainer,
  TitleWithAirportsInfo,
} from '@/components/templates/airport/Airport';
import { Metadata } from 'next';
import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Suspense } from 'react';
import { Prisma, Role } from '@prisma/client';

export const metadata: Metadata = {
  title: 'Airports | Sidewalk',
};

export const AirportsPage = () => {
  return (
    <Suspense fallback={'loading'}>
      <Airport />
    </Suspense>
  );
};
export default AirportsPage;

const Airport = async () => {
  const t = useTranslatedWord('airports.info');
  const airports = await getAirports();
  const { japanAirports, koreaAirprots } = airports.reduce<{
    japanAirports: Prisma.AirportCreateInput[];
    koreaAirprots: Prisma.AirportCreateInput[];
  }>(
    (combinedAirports, airport) => {
      const airportKey =
        airport.countryCode === 'JP' ? 'japanAirports' : 'koreaAirprots';
      combinedAirports[airportKey].push(airport);
      return combinedAirports;
    },
    {
      japanAirports: [],
      koreaAirprots: [],
    },
  );
  return (
    <AirportsContainer>
      <TitleWithAirportsInfo>
        <h2>{t('japan')}</h2>
        <span>
          {t('count')}:{japanAirports.length}
        </span>
        <span>{t('updatedAt')}:2024/2/11</span>
      </TitleWithAirportsInfo>
      {/* <Table.Container>
        <Table.Header>
          <Table.Column flex="1">공항이름</Table.Column>
          <Table.Column flex="2">공항이름</Table.Column>
          <Table.Column flex="1">IATA</Table.Column>
          <Table.Column flex="1">ICAO</Table.Column>
          <Table.Column flex="3">주소</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Header>
        {japanAirports.map((airport, i) => (
          <Table.Row key={i}>
            <Table.Column flex="1">
              <div>{airport.titleJa}</div>
              <div>{airport.titleKo}</div>
            </Table.Column>
            <Table.Column flex="1">
              {airport.iata + ' / ' + airport.icao}
            </Table.Column>
            <Table.Column flex="3">{airport.address}</Table.Column>
            <Table.Column flex="3">인천광역시 중구 제 1여객터미널</Table.Column>
            <Table.Column flex="3">{airport.link}</Table.Column>
          </Table.Row>
        ))}
      </Table.Container> */}
      <TitleWithAirportsInfo>
        <h2>{t('korea')}</h2>
        <span>
          {t('count')}:{koreaAirprots.length}
        </span>
        <span>{t('updatedAt')}:2024/2/11</span>
      </TitleWithAirportsInfo>
      <Table.Container>
        <Table.Header>
          <Table.Column flex="2">공항이름</Table.Column>
          <Table.Column flex="2">IATA / ICAO</Table.Column>
          <Table.Column flex="3">주소</Table.Column>
          <Table.Column flex="3">위치</Table.Column>
          <Table.Column flex="3">링크</Table.Column>
        </Table.Header>
        {koreaAirprots.map((airport, i) => (
          <Table.Row key={i}>
            <Table.Column flex="2">
              <div>{airport.titleJa}</div>
              <div>{airport.titleKo}</div>
            </Table.Column>
            <Table.Column flex="2">
              {airport.iata + ' / ' + airport.icao}
            </Table.Column>
            <Table.Column flex="3">{airport.address}</Table.Column>
            <Table.Column flex="3">{airport.longitude}</Table.Column>
            <Table.Column flex="3">{airport.link}</Table.Column>
          </Table.Row>
        ))}
      </Table.Container>
    </AirportsContainer>
  );
};

const getAirports = async (): Promise<Prisma.AirportCreateInput[]> => {
  const url = `${process.env.DEV_API_BASE_URL}/airports`;
  const airportsOfJapanAndKorea = await fetch(url);
  return airportsOfJapanAndKorea.json();
};

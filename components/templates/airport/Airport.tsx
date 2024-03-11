import { getAirports } from '@/app/api/airports/route';
import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Prisma } from '@prisma/client';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';

type AirportsContainerProps = object;
type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
};
type AirportListProps = {
  airportsList: Prisma.AirportCreateInput[];
};

/**
 *  해당 컴포넌트 분리
 *  날씨 API 작성
 *  일반 페이지에 스크롤 css 작성
 *  한국 일본 나누는 버튼 작성. 레이아웃에 작성
 *  해당 페이지 css작성
 *
 */
export const Airports = async () => {
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
      <TitleWithAirportsInfo airportsCount={japanAirports.length} />
      <AirportList airportsList={japanAirports} />
      <TitleWithAirportsInfo airportsCount={koreaAirprots.length} />
      <AirportList airportsList={koreaAirprots} />
    </AirportsContainer>
  );
};

export const AirportList = ({ airportsList }: AirportListProps) => {
  const t = useTranslatedWord('airports.header');
  return (
    <Table.Container>
      <Table.Header>
        <Table.Column flex="2">{t('category.title')}</Table.Column>
        <Table.Column flex="2">
          {t('category.identifyingCharacter')}
        </Table.Column>
        <Table.Column flex="3">{t('category.address')}</Table.Column>
        <Table.Column flex="3">{t('category.location')}</Table.Column>
        <Table.Column flex="3">{t('category.link')}</Table.Column>
      </Table.Header>
      {airportsList.map((airport, i) => (
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
    </Table.Container>
  );
};

export const AirportsContainer: React.FC<AirportsContainerProps> = (props) => {
  return <section {...stylex.props(styles.airportContainer)} {...props} />;
};

export const TitleWithAirportsInfo = ({
  airportsCount = 0,
  ...props
}: TitleWithAirportsInfoProps) => {
  const t = useTranslatedWord('airports.info');
  return (
    <div {...stylex.props(styles.titleWithAirportsInfo)} {...props}>
      <h2>{t('japan')}</h2>
      <span>
        {t('count')}:{airportsCount}
      </span>
      <span>{t('updatedAt')}:2024/2/11</span>
    </div>
  );
};

export const AirportsLayoutTitle: React.FC<object> = (props) => {
  return <h1 {...stylex.props(styles.airportsLayoutTitle)} {...props} />;
};

const styles = stylex.create({
  airportContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  titleWithAirportsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  },
  airportsLayoutTitle: {
    padding: '1rem',
  },
});

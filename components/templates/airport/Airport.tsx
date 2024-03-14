import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Prisma } from '@prisma/client';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { useAirports } from './useAirport';
import Link, { LinkProps } from 'next/link';
import { PageProps } from '@/app/[locale]/(airports)/airports/[country]/page';
import { LinkIcon } from '@/components/atoms/Icon';
import { WeatherIcon } from '../weather/Weather';
import { EllipsisLoading } from '@/components/molecules/loading/EllipsisLoading';

type AirportsContainerProps = object;
type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
};
type AirportListProps = {
  airportsList: Prisma.AirportCreateInput[];
};
type AirportsLayoutLinkProps = LinkProps & {
  title: string;
};

/**
 *  날씨 API 작성
 *  일반 페이지에 스크롤 css 작성
 *  한국 일본 나누는 버튼 작성. 레이아웃에 작성
 *  해당 페이지 css작성
 *
 */
export const Airports = async (props: PageProps) => {
  const { country } = props.params;
  const { actions } = useAirports();
  const airports = await actions.getAirports(country);

  return (
    <AirportsContainer>
      <Suspense fallback={`${country} loading...`}>
        <TitleWithAirportsInfo airportsCount={airports.length} />
        <AirportList airportsList={airports} />
      </Suspense>
    </AirportsContainer>
  );
};

export const AirportList = ({ airportsList }: AirportListProps) => {
  const t = useTranslatedWord('airports.header.category');
  return (
    <Table.Container useScroll>
      <Table.Header>
        <Table.Column>No</Table.Column>
        <Table.Column flex="1">{t('title')}</Table.Column>
        <Table.Column flex="1">{t('identifyingCharacter')}</Table.Column>
        <Table.Column flex="5">{t('address')}</Table.Column>
        <Table.Column flex="1">{t('location')}</Table.Column>{' '}
        <Table.Column flex="1">{t('link')}</Table.Column>
      </Table.Header>
      {airportsList.map((airport, i) => (
        <Table.Row key={i}>
          <Table.Column flex="auto">{i + 1}</Table.Column>
          <Table.Column flex="1" columnFlexDirection>
            <div>{airport.titleJa}</div>
            <div>{airport.titleKo}</div>
          </Table.Column>
          <Table.Column flex="1">{airport.iata ?? airport.icao}</Table.Column>
          <Table.Column flex="3">{airport.address}</Table.Column>
          <Table.Column flex="3">
            <Suspense fallback={<EllipsisLoading />}>
              <WeatherIcon lat={airport.latitude} lon={airport.longitude} />
            </Suspense>
          </Table.Column>
          <Table.Column flex="3">
            <Link href={airport.link} target="_blank" rel="noopener noreferrer">
              <LinkIcon />
            </Link>
          </Table.Column>
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

export const AirportsLayoutLink = ({
  title,
  ...props
}: AirportsLayoutLinkProps) => {
  return <Link {...props}>{title}</Link>;
};

const styles = stylex.create({
  airportContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  titleWithAirportsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  },
});

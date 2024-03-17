import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Prisma } from '@prisma/client';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { useAirports } from './useAirport';
import Link, { LinkProps } from 'next/link';
import { LinkIcon } from '@/components/atoms/Icon';
import { WeatherIcon } from '../weather/Weather';
import { EllipsisLoading } from '@/components/molecules/loading/EllipsisLoading';
import { path } from '@/types/path';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';

type AirportsProps = {
  params: { locale: Locales; country: Country };
};
type AirportsContainerProps = object;
type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
};
type AirportListProps = {
  airportsList: Prisma.AirportCreateInput[];
  country: Country;
};
type AirportsLayoutLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const Airports = async (props: AirportsProps) => {
  const { country } = props.params;
  const { actions } = useAirports();
  const airports = await actions.getAirports(country);

  return (
    <AirportsContainer>
      <Suspense fallback={`${country} loading...`}>
        <TitleWithAirportsInfo airportsCount={airports.length} />
        <AirportList airportsList={airports} country={country} />
      </Suspense>
    </AirportsContainer>
  );
};

export const AirportList = ({ airportsList, country }: AirportListProps) => {
  const t = useTranslatedWord('airports.header.category');
  return (
    <Table.Container style={styles.listContainer}>
      <Table.Header>
        <Table.Column width="100">No</Table.Column>
        <Table.Column width="200">{t('title')}</Table.Column>
        <Table.Column width="100">{t('identifyingCharacter')}</Table.Column>
        <Table.Column flex="auto">{t('address')}</Table.Column>
        <Table.Column width="100">{t('weather')}</Table.Column>
        <Table.Column width="100">{t('link')}</Table.Column>
      </Table.Header>
      <Table.Body useScroll>
        {airportsList.map((airport, i) => (
          <Table.Row key={i}>
            <Table.Column width="100">{i + 1}</Table.Column>
            <Table.Column width="200">
              <AirportsDetailLink
                href={(airport.iata || airport.icao).toLowerCase()}
              >
                <div>{airport.titleJa}</div>
                <div>{airport.titleKo}</div>
              </AirportsDetailLink>
            </Table.Column>
            <Table.Column width="100">
              {airport.iata || airport.icao}
            </Table.Column>
            <Table.Column flex="auto">{airport.address}</Table.Column>
            <Table.Column width="100">
              <Suspense fallback={<EllipsisLoading />}>
                <WeatherIcon lat={airport.latitude} lon={airport.longitude} />
              </Suspense>
            </Table.Column>
            <Table.Column width="100">
              <Link
                href={airport.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
              </Link>
            </Table.Column>
          </Table.Row>
        ))}
      </Table.Body>
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
  const getUrl = (country: Country) => `${path.airports}/${country}`;

  return (
    <div {...stylex.props(styles.titleWithAirportsInfo)} {...props}>
      <Link href={getUrl('jp')} {...stylex.props(styles.airportsSelectButton)}>
        {t('japan')}
      </Link>
      <Link href={getUrl('ko')} {...stylex.props(styles.airportsSelectButton)}>
        {t('korea')}
      </Link>
      <h2>{t('info')}</h2>
      <span>
        {t('count')}:{airportsCount}
      </span>
      <span>{t('updatedAt')}:2024/2/11</span>
    </div>
  );
};

export const AirportsDetailLink = ({
  children,
  ...props
}: AirportsLayoutLinkProps) => {
  return (
    <Link {...props} {...stylex.props(styles.airportsDetailLink)}>
      {children}
    </Link>
  );
};

const styles = stylex.create({
  airportContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  titleWithAirportsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  },
  listContainer: {
    height: '72vh',
  },
  airportsSelectButton: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
  },
  airportsDetailLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'black',
  },
});

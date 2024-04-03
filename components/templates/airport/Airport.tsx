import { Table } from '@/components/molecules/table/Table';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Prisma } from '@prisma/client';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { useAirports } from './useAirport';
import Link, { LinkProps } from 'next/link';
import { Icons } from '@/components/atoms/Icon';
import { WeatherIcon } from '../weather/Weather';
import { EllipsisLoading } from '@/components/molecules/loading/EllipsisLoading';
import { path } from '@/types/path';
import { Country } from '@/types/country';
import { Locales } from '@/types/locale';
import { designStyles } from '@/components/styles';
import { Button } from '@/components/atoms/Button';

type AirportsProps = {
  params: { locale: Locales; country: Country };
};
type AirportsContainerProps = object;
type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'> & {
  airportsCount?: number;
  country: Country;
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
        <TitleWithAirportsInfo
          airportsCount={airports.length}
          country={country}
        />
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
        <Table.Column
          size={{ width: '50px' }}
          flex={{ justifyContent: 'center' }}
        >
          No
        </Table.Column>
        <Table.Column
          size={{ width: '200px' }}
          flex={{ justifyContent: 'center' }}
        >
          {t('title')}
        </Table.Column>
        <Table.Column
          size={{ width: '200px' }}
          flex={{ justifyContent: 'center' }}
        >
          {t('identifyingCharacter')}
        </Table.Column>
        <Table.Column
          size={{ width: '100%' }}
          flex={{ flex: 'auto', justifyContent: 'center' }}
        >
          {t('address')}
        </Table.Column>
        <Table.Column
          size={{ width: '100px' }}
          flex={{ justifyContent: 'center' }}
        >
          {t('weather')}
        </Table.Column>
        <Table.Column
          size={{ width: '100px' }}
          flex={{ justifyContent: 'center' }}
        >
          {t('link')}
        </Table.Column>
      </Table.Header>
      <Table.Body useScroll>
        {airportsList.map((airport, i) => (
          <Table.Row key={i}>
            <Table.Column
              size={{ width: '50px' }}
              flex={{ justifyContent: 'center' }}
            >
              {i + 1}
            </Table.Column>
            <Table.Column
              size={{ width: '200px' }}
              flex={{ justifyContent: 'center' }}
            >
              <AirportsDetailLink
                href={(airport.iata || airport.icao).toLowerCase()}
              >
                <div>{airport.titleJa}</div>
                <div>{airport.titleKo}</div>
              </AirportsDetailLink>
            </Table.Column>
            <Table.Column
              size={{ width: '200px' }}
              flex={{ justifyContent: 'center' }}
            >
              {airport.iata || airport.icao}
            </Table.Column>
            <Table.Column
              size={{ width: '100%' }}
              flex={{ flex: 'auto', justifyContent: 'start' }}
            >
              {airport.address}
            </Table.Column>
            <Table.Column
              size={{ width: '100px' }}
              flex={{ justifyContent: 'center' }}
            >
              <Suspense fallback={<EllipsisLoading />}>
                <WeatherIcon lat={airport.latitude} lon={airport.longitude} />
              </Suspense>
            </Table.Column>
            <Table.Column
              size={{ width: '100px' }}
              flex={{ justifyContent: 'center' }}
            >
              <Link
                href={airport.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons src="IconLink" />
              </Link>
            </Table.Column>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Container>
  );
};

export const AirportsContainer: React.FC<AirportsContainerProps> = (props) => {
  return (
    <section
      {...props}
      {...stylex.props(
        designStyles['size']({ width: '100%' }),
        designStyles['flex']({ flexDirection: 'column' }),
        designStyles['padding']({
          paddingLeft: '32px',
          paddingRight: '32px',
        }),
      )}
    />
  );
};

export const TitleWithAirportsInfo = (props: TitleWithAirportsInfoProps) => {
  const { airportsCount = 0, country, ...rest } = props;
  const t = useTranslatedWord('airports.info');
  const getUrl = (country: Country) => `${path.airports}/${country}`;
  return (
    <div
      {...rest}
      {...stylex.props(
        designStyles['flex']({ alignItems: 'center', gap: '1rem' }),
        designStyles['padding']({
          paddingBottom: '16px',
          paddingTop: '16px',
        }),
      )}
    >
      <div
        {...stylex.props(
          designStyles['size']({ width: 'fit-content' }),
          designStyles['flex']({
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
          }),
          designStyles['padding']({
            paddingBottom: '4px',
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '4px',
          }),
          designStyles['bgColor']({ color: 'whiteSoftGray' }),
          designStyles['radius']({
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }),
        )}
      >
        <Button
          size={{ width: '5rem', height: '3rem' }}
          // color={{ color: 'softGray' }}
          padding={{
            paddingBottom: '8px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '8px',
          }}
          radius={{
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          bgColor={{ color: 'whiteSoftGray' }}
          font={{
            fontSize: 'small',
            fontWeight: 'bold',
          }}
          useCustomSelected={{
            color: props.country === 'jp' ? 'darkGray' : 'softGray',
            bgColor: props.country === 'jp' ? 'baseWhite' : 'whiteSoftGray',
          }}
        >
          <Link href={getUrl('jp')}>{t('japan')}</Link>
        </Button>
        <Button
          size={{ width: '5rem', height: '3rem' }}
          // color={{ color: 'softGray' }}
          radius={{
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          }}
          padding={{
            paddingBottom: '8px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '8px',
          }}
          bgColor={{ color: 'whiteSoftGray' }}
          font={{
            fontSize: 'small',
            fontWeight: 'bold',
          }}
          useCustomSelected={{
            color: props.country === 'ko' ? 'darkGray' : 'softGray',
            bgColor: props.country === 'ko' ? 'baseWhite' : 'whiteSoftGray',
          }}
        >
          <Link href={getUrl('ko')}>{t('korea')}</Link>
        </Button>
      </div>

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
  listContainer: {
    width: '100%',
    maxHeight: '72vh',
  },
  airportsDetailLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  testsitl: {
    backgroundColor: {
      default: 'blue',
    },
    fontSize: '2rem',
  },
});

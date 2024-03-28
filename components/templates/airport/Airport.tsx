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
        <Table.Column size={{ width: '50px' }}>No</Table.Column>
        <Table.Column size={{ width: '200px' }}>{t('title')}</Table.Column>
        <Table.Column size={{ width: '200px' }}>
          {t('identifyingCharacter')}
        </Table.Column>
        <Table.Column
          hasFlex={{
            flex: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {t('address')}
        </Table.Column>
        <Table.Column size={{ width: '100px' }}>{t('weather')}</Table.Column>
        <Table.Column size={{ width: '100px' }}>{t('link')}</Table.Column>
      </Table.Header>
      <Table.Body useScroll>
        {airportsList.map((airport, i) => (
          <Table.Row key={i}>
            <Table.Column size={{ width: '50px' }}>{i + 1}</Table.Column>
            <Table.Column size={{ width: '200px' }}>
              <AirportsDetailLink
                href={(airport.iata || airport.icao).toLowerCase()}
              >
                <div>{airport.titleJa}</div>
                <div>{airport.titleKo}</div>
              </AirportsDetailLink>
            </Table.Column>
            <Table.Column size={{ width: '200px' }}>
              {airport.iata || airport.icao}
            </Table.Column>
            <Table.Column
              hasFlex={{
                flex: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {airport.address}
            </Table.Column>
            <Table.Column size={{ width: '100px' }}>
              <Suspense fallback={<EllipsisLoading />}>
                <WeatherIcon lat={airport.latitude} lon={airport.longitude} />
              </Suspense>
            </Table.Column>
            <Table.Column size={{ width: '100px' }}>
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
        designStyles['customPadding']({
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
        designStyles['customPadding']({
          paddingBottom: '16px',
          paddingTop: '16px',
        }),
      )}
    >
      <div
        {...stylex.props(
          designStyles['flex']({
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
          }),
          designStyles['padding']('4px'),
          designStyles['bgColor']({ color: 'whiteSoftGray' }),
          designStyles['radius']('12px'),
        )}
      >
        <Link href={getUrl('jp')}>
          <Button
            size={{ width: '5rem', height: '3rem' }}
            hasRadius="8px"
            bgColor={{ color: 'whiteSoftGray' }}
            font={{
              color: 'softGray',
              fontWeight: 600,
              fontSize: '1rem',
            }}
            useCustomSelected={{
              color: props.country === 'jp' ? 'darkGray' : 'softGray',
              bgColor: props.country === 'jp' ? 'baseWhite' : 'whiteSoftGray',
            }}
          >
            {t('japan')}
          </Button>
        </Link>
        <Link href={getUrl('ko')}>
          <Button
            size={{ width: '5rem', height: '3rem' }}
            hasRadius="8px"
            bgColor={{ color: 'whiteSoftGray' }}
            font={{
              color: 'softGray',
              fontWeight: 600,
              fontSize: '1rem',
            }}
            useCustomSelected={{
              color: props.country === 'ko' ? 'darkGray' : 'softGray',
              bgColor: props.country === 'ko' ? 'baseWhite' : 'whiteSoftGray',
            }}
          >
            {t('korea')}
          </Button>
        </Link>
      </div>

      {/* <h2>{t('info')}</h2> */}
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
});

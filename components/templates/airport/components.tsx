import { DesignProps, FlexProps, designStyles } from '@/components/styles';
import {
  PaletteVars,
  PixelLevelOption,
  RemLevelOpton,
  fontSizing,
  fontWeight,
  palette,
  shadowing,
} from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import {
  HeaderProps,
  RowProps,
  Table,
  TableProps,
} from '@/components/molecules/table/Table';
import { Suspense } from 'react';
import { EllipsisLoading } from '@/components/molecules/loading/EllipsisLoading';
import { WeatherIcon } from '../weather/Weather';
import Link, { LinkProps } from 'next/link';
import { Icons } from '@/components/atoms/Icon';

type ContainerProps = React.ComponentPropsWithoutRef<'section'>;
type InfoBarProps = React.ComponentPropsWithoutRef<'div'>;
type TextProps = React.ComponentPropsWithoutRef<'span'>;
type CountryButtonProps = {
  isSelected: boolean;
} & React.ComponentPropsWithoutRef<'button'>;
type TableHeaderProps = {
  coloums: {
    title: string;
    width: PixelLevelOption | RemLevelOpton | '100%';
  }[];
} & HeaderProps;
export type Width = PixelLevelOption | RemLevelOpton | '100%';
type TableRowProps = {
  coloums: {
    element: React.ReactNode;
    width: Width;
  }[];
} & RowProps;
type AirportsLayoutLinkProps = LinkProps & {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <section
      {...props}
      {...stylex.props(
        designStyles['size']({ width: '100%' }),
        designStyles['flex']({ flexDirection: 'column', gap: 'large' }),
        designStyles['padding']({
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '16px',
          paddingTop: '16px',
        }),
      )}
    />
  );
};

const InfoBar = (props: InfoBarProps) => {
  return <div {...props} {...stylex.props(styles.infoBar)} />;
};

const CountryButton = (props: CountryButtonProps) => {
  const { isSelected, ...rest } = props;
  return (
    <button
      {...rest}
      {...stylex.props(
        styles.countryButton({
          bgColor: isSelected ? 'baseWhite' : 'whiteGray',
          color: isSelected ? 'lightBlue' : 'darkGray',
          bosxShadow: isSelected ? 'dug' : 'swell',
        }),
      )}
    />
  );
};

const Text = (props: TextProps) => {
  return (
    <span
      {...props}
      {...stylex.props(
        designStyles['font']({
          fontSize: 'small',
          fontWeight: 'bold',
        }),
      )}
    />
  );
};

const TableContanier = (props: TableProps) => {
  return <Table.Container {...props} style={styles.listContainer} />;
};
const TableHeader = (props: TableHeaderProps) => {
  const { coloums, ...rest } = props;
  return (
    <Table.Header {...rest}>
      {coloums.map((item, i) => (
        <Table.Column
          key={i}
          size={{ width: item.width }}
          flex={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item.title}
        </Table.Column>
      ))}
    </Table.Header>
  );
};

const TableRow = (props: TableRowProps) => {
  const { coloums, ...rest } = props;
  return (
    <Table.Row {...rest}>
      {coloums.map((item, i) => (
        <Table.Column
          key={i}
          size={{ width: item.width }}
          flex={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item.element}
        </Table.Column>
      ))}
    </Table.Row>
  );
};

const SuspeneseWeatherIcon = (props: { lat: string; lon: string }) => {
  return (
    <Suspense fallback={<EllipsisLoading />}>
      <WeatherIcon lat={props.lat} lon={props.lon} />
    </Suspense>
  );
};

const LinkIcon = (props: { link: string }) => {
  return (
    <Link href={props.link} target="_blank" rel="noopener noreferrer">
      <Icons src="IconLink" />
    </Link>
  );
};

const DetailLink = ({ children, ...props }: AirportsLayoutLinkProps) => {
  return (
    <Link {...props} {...stylex.props(styles.detailLink)}>
      {children}
    </Link>
  );
};

export const AirportComp = {
  Container,
  InfoBar,
  CountryButton,
  Text,
  TableHeader,
  TableRow,
  SuspeneseWeatherIcon,
  LinkIcon,
  DetailLink,
  TableContanier,
};

const styles = stylex.create({
  infoBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: 'fit-content',
    borderRadius: '12px',
    padding: '6px',
    backgroundColor: palette['whiteSoftGray'],
  },
  countryButton: (props: {
    bgColor: PaletteVars;
    color: PaletteVars;
    bosxShadow: keyof typeof shadowing;
  }) => ({
    width: 'fit-content',
    height: '3rem',
    borderRadius: '0.5rem',
    backgroundColor: palette[props.bgColor],
    color: palette[props.color],
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    cursor: 'pointer',
    fontSize: fontSizing['xsmall'],
    fontWeight: fontWeight['bold'],
    padding: '1rem',
    boxShadow: shadowing[props.bosxShadow],
  }),
  detailLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: palette['darkGray'],
  },
  listContainer: {
    width: '100%',
    maxHeight: '72vh',
  },
});

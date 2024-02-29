import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';

type AirportsContainerProps = object;
type TitleWithAirportsInfoProps = ComponentPropsWithoutRef<'div'>;

export const AirportsContainer: React.FC<AirportsContainerProps> = (props) => {
  return <section {...stylex.props(styles.airportContainer)} {...props} />;
};

export const TitleWithAirportsInfo = (props: TitleWithAirportsInfoProps) => {
  return <div {...stylex.props(styles.titleWithAirportsInfo)} {...props} />;
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

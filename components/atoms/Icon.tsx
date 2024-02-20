import * as Icon from '@/public/svgs/index';
import * as stylex from '@stylexjs/stylex';

export const JapanFlagIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <Icon.IconJapanFlag
    viewBox="0 0 900 600"
    {...stylex.props(styles.lx3)}
    {...props}
  />
);

export const KoreaFlagIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <Icon.IconKoreaFlag
    viewBox="-45 -30 90 60"
    style={{ backgroundColor: 'white' }}
    {...stylex.props(styles.lx2)}
    {...props}
  />
);

export const SwapIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <Icon.IconSwap viewBox="0 0 44 44" {...stylex.props(styles.lx)} {...props} />
);

export const FindIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <Icon.IconFind {...stylex.props(styles.lx)} {...props} />
);

export const DepartureFlightIcon: React.FC<React.SVGProps<SVGElement>> = (
  props,
) => <Icon.IconDepartureFlight {...stylex.props(styles.sm)} {...props} />;

export const EditIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <Icon.IconEdit {...stylex.props(styles.lg)} {...props} />
);

export const NotificationIcon: React.FC<React.SVGProps<SVGElement>> = (
  props,
) => <Icon.IconNotification {...stylex.props(styles.lg)} {...props} />;

const styles = stylex.create({
  xs: {
    width: '0.75rem',
    height: 'auto',
  },
  sm: {
    width: '1rem',
    height: 'auto',
  },
  md: {
    width: '1.5rem',
    height: 'auto',
  },
  lg: {
    width: '2rem',
    height: 'auto',
  },
  lx: {
    width: '2.5rem',
    height: 'auto',
  },
  lx2: {
    width: '3rem',
    height: 'auto',
  },
  lx3: {
    width: '4rem',
    height: 'auto',
  },
});

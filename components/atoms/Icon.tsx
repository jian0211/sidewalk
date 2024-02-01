import {
  IconJapanFlag,
  IconKoreaFlag,
  IconSwap,
  IconFind,
} from '@/public/svgs/index';
import * as stylex from '@stylexjs/stylex';

export const JapanFlagIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <IconJapanFlag
    viewBox="0 0 900 600"
    {...stylex.props(styles.icon)}
    {...props}
  />
);

export const KoreaFlagIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <IconKoreaFlag
    viewBox="-45 -30 90 60"
    style={{ backgroundColor: 'white' }}
    {...stylex.props(styles.icon)}
    {...props}
  />
);

export const SwapIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <IconSwap viewBox="0 0 44 44" {...stylex.props(styles._icon)} {...props} />
);

export const FindIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <IconFind {...stylex.props(styles._icon)} {...props} />
);

const styles = stylex.create({
  icon: {
    width: '4rem',
    height: 'auto',
  },
  _icon: {
    width: '2.5rem',
    height: 'auto',
  },
});

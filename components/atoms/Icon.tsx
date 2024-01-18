import { IconJapanFlag, IconKoreaFlag, IconSwap } from '@/public/svgs/index';
import * as stylex from '@stylexjs/stylex';

export const JapanFlagIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <IconJapanFlag viewBox="0 0 900 600" {...stylex.props(styles.icon)} />
);

export const KoreaFlagIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <IconKoreaFlag
    viewBox="-45 -30 90 60"
    style={{ backgroundColor: 'white' }}
    {...stylex.props(styles.icon)}
  />
);

export const SwapIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <IconSwap viewBox="0 0 44 44" {...stylex.props(styles._icon)} />
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

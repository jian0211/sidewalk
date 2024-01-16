// import * as Icons from '@/public/svgs/index';
import { IconJapanFlag, IconKoreaFlag } from '@/public/svgs/index';
import * as stylex from '@stylexjs/stylex';

// type IconProps = React.ComponentProps<'svg'> & {
//   iconKey: keyof typeof Icons;
// };

// const BasicIcon = ({ iconKey, ...props }: IconProps) => {
//   const BasicIcon: React.FC<React.SVGProps<SVGElement>> = Icons[iconKey];

//   return <BasicIcon {...stylex.props(styles.icon)} {...props} />;
// };

export const JapanFlag: React.FC<React.SVGProps<SVGElement>> = () => (
  <IconJapanFlag viewBox="0 0 900 600" {...stylex.props(styles.icon)} />
);

export const KoreaFlag: React.FC<React.SVGProps<SVGElement>> = () => (
  <IconKoreaFlag
    viewBox="-45 -30 90 60"
    style={{ backgroundColor: 'white' }}
    {...stylex.props(styles.icon)}
  />
);

const styles = stylex.create({
  icon: {
    width: '4rem',
    height: 'auto',
    borderRadius: '100vw',
  },
});

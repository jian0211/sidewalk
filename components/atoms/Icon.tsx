import * as Icon from '@/public/svgs/index';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';

export const JapanFlagIcon = () => (
  <Image src={Icon.IconJapanFlag} width={30} alt="" />
);

export const KoreaFlagIcon = () => (
  <Image src={Icon.IconKoreaFlag} width={30} alt="" />
);

export const SwapIcon = () => <Image src={Icon.IconSwap} width={30} alt="" />;

export const FindIcon = () => <Image src={Icon.IconFind} width={30} alt="" />;

export const DepartureFlightIcon = () => (
  <Image src={Icon.IconDepartureFlight} width={30} alt="" />
);

export const EditIcon = () => <Image src={Icon.IconEdit} width={30} alt="" />;

export const NotificationIcon = () => (
  <Image src={Icon.IconNotification} width={30} alt="" />
);

// const styles = stylex.create({
//   xs: {
//     width: '0.75rem',
//     height: 'auto',
//   },
//   sm: {
//     width: '1rem',
//     height: 'auto',
//   },
//   md: {
//     width: '1.5rem',
//     height: 'auto',
//   },
//   lg: {
//     width: '2rem',
//     height: 'auto',
//   },
//   lx: {
//     width: '2.5rem',
//     height: 'auto',
//   },
//   lx2: {
//     width: '3rem',
//     height: 'auto',
//   },
//   lx3: {
//     width: '4rem',
//     height: 'auto',
//   },
// });

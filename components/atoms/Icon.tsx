import * as Icon from '@/public/svgs/index';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import Image from 'next/image';

type Icons = {
  style?: StyleXArray<any>;
  src: IconNames;
};
export type IconNames = keyof typeof Icon;

export const Icons = ({ src, style, ...props }: Icons) => (
  <Image {...props} priority src={Icon[src]} alt="" width={30} style={style} />
);

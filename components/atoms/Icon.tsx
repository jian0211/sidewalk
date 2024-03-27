import * as Icon from '@/public/svgs/index';
import { palette, spacing } from '../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import Image from 'next/image';

export type IconsProps = {
  style?: StyleXArray<any>;
  src: IconNames;
  alt?: string;
  width?: number;
  useBorder?: boolean;
} & React.ComponentProps<'span'>;
export type IconNames = keyof typeof Icon;

export const Icons = (props: IconsProps) => {
  const { src, style, width = 30, alt = '', useBorder, ...rest } = props;

  return (
    <span
      {...rest}
      {...stylex.props(styles['icon'], useBorder && styles['useBorder'], style)}
    >
      <Image
        src={Icon[src]}
        alt={alt}
        width={width}
        style={{ height: 'auto' }}
      />
    </span>
  );
};

const styles = stylex.create({
  icon: {
    display: 'flex',
    width: 'fit-content',
    height: 'fit-content',
  },
  useBorder: {
    borderColor: palette.darkGray,
    borderStyle: 'solid',
    borderWidth: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
  },
});

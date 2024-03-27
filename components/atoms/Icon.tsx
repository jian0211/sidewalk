import * as Icon from '@/public/svgs/index';
import { palette, spacing } from '../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import Image from 'next/image';
import { designStyles } from '../styles';

export type IconsProps = {
  style?: StyleXArray<any>;
  src: IconNames;
  alt?: string;
  width?: number;
  useBorder?: boolean;
  useOutline?: boolean;
  useCursor?: boolean;
} & React.ComponentProps<'span'>;
export type IconNames = keyof typeof Icon;

export const Icons = (props: IconsProps) => {
  const {
    src,
    style,
    width = 30,
    alt = '',
    useBorder,
    useOutline,
    useCursor,
    ...rest
  } = props;

  return (
    <span
      {...rest}
      {...stylex.props(
        styles['icon'],
        useBorder && styles['useBorder'],
        useOutline && designStyles['padding']('8px'),
        useOutline &&
          designStyles['border']({ color: 'softGray', width: '2px' }),
        useOutline &&
          designStyles['flex']({
            alignItems: 'center',
            justifyContent: 'center',
          }),
        designStyles['radius']('8px'),
        useCursor && styles['cursor'],
        style,
      )}
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
  cursor: {
    cursor: 'pointer',
  },
});

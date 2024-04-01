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
        useOutline &&
          designStyles['padding']({
            paddingBottom: '8px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '8px',
          }),
        useOutline &&
          designStyles['border']({
            borderColor: 'softGray',
            borderWidth: '2px',
            hoverColor: 'lightBlue',
          }),
        useOutline &&
          designStyles['flex']({
            alignItems: 'center',
            justifyContent: 'center',
          }),
        designStyles['radius']({
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }),
        useCursor && designStyles['cursor'],
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
});

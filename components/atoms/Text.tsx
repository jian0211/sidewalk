import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { DesignProps, designStyles } from '../styles';
import { Prettier } from '@/types/common';
import { fontSizing, fontWeight } from '../../styles/globalTokens.stylex';

type TextCssProps = Prettier<Pick<DesignProps, 'color' | 'font'>>;

type TextProps = {
  xstyle?: StyleXArray<any>;
} & TextCssProps &
  React.ComponentProps<'p'>;

export const Text = (props: TextProps) => {
  const { color, font, xstyle, ...rest } = props;
  return (
    <p
      {...rest}
      {...stylex.props(
        styles.text,
        color && designStyles['color'](color),
        font &&
          designStyles['font']({
            fontSize: font.fontSize,
            fontWeight: font.fontWeight,
            textDecoration: font.textDecoration,
          }),
        xstyle,
      )}
    />
  );
};

export const B = (props: TextProps) => {
  return <Text {...props} {...stylex.props(styles.b)} />;
};

const styles = stylex.create({
  text: {
    fontSize: fontSizing['small'],
    fontWeight: fontWeight['normal'],
    textDecoration: 'none',
  },
  b: {
    fontWeight: fontWeight['bold'],
  },
});

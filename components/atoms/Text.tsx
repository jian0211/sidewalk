import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { DesignProps, designStyles } from '../styles';
import { fontSizing, fontWeight } from '../../styles/globalTokens.stylex';

type TextProps = {
  xstyle?: StyleXArray<any>;
  colorProps?: DesignProps['color'];
  fontProps?: DesignProps['font'];
} & React.ComponentProps<'p'>;

export const Text = (props: TextProps) => {
  const { colorProps, fontProps, xstyle, ...rest } = props;
  return (
    <p
      {...rest}
      {...stylex.props(
        styles.text,
        colorProps && designStyles['color'](colorProps),
        fontProps && designStyles['font'](fontProps),
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

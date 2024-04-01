import { palette } from '../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { DesignProps, designStyles } from '../styles';

type InputProps = Pick<DesignProps, 'radius' | 'size' | 'color'> &
  React.ComponentProps<'input'>;

type RadioInputProps = InputProps & {
  theme?: 'hoverTheme';
};

export const Input = (props: InputProps) => {
  const { size, color, radius, ...rest } = props;

  return (
    <input
      {...rest}
      {...stylex.props(
        styles.input,
        size && designStyles['size'](size),
        color && designStyles['color'](color),
        radius && designStyles['radius'](radius),
      )}
    />
  );
};

export const RadioInput = (props: RadioInputProps) => {
  if (props.id === undefined) throw Error('RadioInput Id を登録してください。');
  const { theme, ...rest } = props;
  return (
    <label
      htmlFor={props.id}
      {...stylex.props(styles.radioLabel, theme && styles[theme])}
    >
      {props.children}
      <Input {...rest} style={{ display: 'none' }} />
    </label>
  );
};

const styles = stylex.create({
  input: {},
  radioLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ここから Themeになれる可能性があるCSSコード
  hoverTheme: {
    color: {
      default: palette.softGray,
      ':hover': palette.lightBlue,
      ':checked': palette.darkGray,
    },
    backgroundColor: {
      default: palette.baseWhite,
      ':checked': palette.softGray,
    },
  },
});

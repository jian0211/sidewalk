import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

export type ButtonProps = React.ComponentProps<'button'> & {
  style?: StyleXArray<any>;
  hasHoverBorder?: boolean;
};

export const Button = ({ style, hasHoverBorder, ...props }: ButtonProps) => {
  return (
    <button
      {...stylex.props(
        styles.button,
        hasHoverBorder && styles.hoverBorder,
        style,
      )}
      {...props}
    />
  );
};

const styles = stylex.create({
  button: {
    padding: 0,
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    background: 'none',
  },
  hoverBorder: {
    borderColor: {
      default: 'none',
      ':hover': '#00256C',
    },
    borderWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderStyle: {
      default: 'none',
      ':hover': 'solid',
    },
    borderRadius: '1vw',
  },
});

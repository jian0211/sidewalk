import { palette, spacing } from '../../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

type ContainerProps = React.ComponentPropsWithoutRef<'div'>;
type RadioButtonProps = React.ComponentProps<'input'> & {
  value: string;
};

const Container = (props: ContainerProps) => {
  return <div {...props} {...stylex.props(styles.container)} />;
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ value, children, ...props }, ref) => {
    return (
      <label
        {...stylex.props(styles.radioLable, props.checked && styles.checked)}
        htmlFor={value}
      >
        <input
          {...props}
          {...stylex.props(styles.radioButton)}
          ref={ref}
          id={value}
          type="radio"
          value={value}
          name="tripType"
        />
        {children}
      </label>
    );
  },
);
RadioButton.displayName = 'radioButton';

export const TripType = { Container, RadioButton };

const styles = stylex.create({
  container: {
    display: 'flex',
    borderColor: palette.whiteSoftGray,
    borderWidth: spacing.xxsmall,
    borderStyle: 'solid',
    borderRadius: spacing.medium,
    fontWeight: 600,
    color: palette.darkGray,
  },
  radioLable: {
    width: '4rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // borderColor: 'inherit',
    // borderWidth: 'inherit',
    // borderStyle: 'inherit',
    borderRadius: 'inherit',
  },
  radioButton: {
    display: 'none',
  },
  checked: {
    color: palette.baseWhite,
    backgroundColor: palette.lightBlue,
  },
});

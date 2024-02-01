import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

type TripTypeContainerProps = React.ComponentPropsWithoutRef<'div'>;
type TripTypeRadioButtonProps = React.ComponentProps<'input'> & {
  value: string;
};

export const TripTypeContainer = (props: TripTypeContainerProps) => {
  return <div {...stylex.props(styles.tripTypeContainer)} {...props} />;
};

export const TripTypeRadioButton = forwardRef<
  HTMLInputElement,
  TripTypeRadioButtonProps
>(({ value, children, ...props }, ref) => {
  return (
    <label
      {...stylex.props(
        styles.tripTypeRadioLable,
        props.checked && styles.checked,
      )}
      htmlFor={value}
    >
      <input
        {...stylex.props(styles.tripTypeRadioButton)}
        ref={ref}
        id={value}
        type="radio"
        value={value}
        name="tripType"
        {...props}
      />
      {children}
    </label>
  );
});
TripTypeRadioButton.displayName = 'tripTypeRadioButton';

const styles = stylex.create({
  tripTypeContainer: {
    display: 'flex',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00256C',
    borderRadius: '1vw',
  },
  tripTypeRadioLable: {
    width: '4rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1vw',
    cursor: 'pointer',
  },
  tripTypeRadioButton: {
    display: 'none',
  },
  checked: {
    color: 'white',
    backgroundColor: '#00256C',
  },
});

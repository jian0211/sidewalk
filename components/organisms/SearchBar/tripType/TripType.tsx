import { designStyles, statusStyles } from '@/components/styles';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

type ContainerProps = React.ComponentPropsWithoutRef<'div'>;
type RadioButtonProps = React.ComponentProps<'input'> & {
  value: string;
};

const Container = (props: ContainerProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['flex'](),
        designStyles['border']({
          borderColor: 'whiteSoftGray',
          borderWidth: '2px',
        }),
        designStyles['radius']({
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }),
      )}
    />
  );
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ value, children, ...props }, ref) => {
    return (
      <label
        {...stylex.props(
          designStyles['flex']({
            alignItems: 'center',
            justifyContent: 'center',
          }),
          designStyles['size']({ width: '4rem', height: '3rem' }),
          designStyles['cursor'],
          designStyles['font']({ fontWeight: 'bold' }),
          designStyles['color']({ color: 'darkGray' }),
          designStyles['radius']({
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }),
          props.checked && statusStyles['basicSelected'],
        )}
        htmlFor={value}
      >
        <input
          {...props}
          style={{ display: 'none' }}
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

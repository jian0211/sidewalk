import { Button, ButtonProps } from '@/components/atoms/Button';
import { Icons } from '@/components/atoms/Icon';
import { Dropdown } from '@/components/molecules/dropdown/Dropdown';
import {
  ModalBody,
  ModalContainer,
  ModalContainerProps,
  ModalHeader,
} from '@/components/molecules/modal/Modal';
import { useDropdown } from '@/hooks/providers/ModalOpenControllProvider';
import { AirportsIataWithDefault, Flights } from '@/store/fligths';
import * as stylex from '@stylexjs/stylex';
import React from 'react';

type BookingContainerProps = React.ComponentPropsWithoutRef<'div'>;
type BookingTravelPointDropdownProps = React.ComponentPropsWithoutRef<'div'>;
type BookingTravelPointProps = React.ComponentPropsWithoutRef<'div'> & {
  iata: string;
  title: string;
};
type BookingTravelPointSwapperButtonProps = ButtonProps;
type BookingSearchTravelPointModalProps = ModalContainerProps & {
  title: string;
};
type FlightIconWithTextProps = React.ComponentPropsWithoutRef<'li'> & {
  iata: AirportsIataWithDefault;
  name: string;
};
type BookingTravelPointListProps = React.ComponentPropsWithoutRef<'ul'>;
type BookingTravelCountryInputProps =
  React.ComponentPropsWithoutRef<'input'> & {
    value: string;
  };

export const BookingContainer = (props: BookingContainerProps) => {
  return <div {...stylex.props(styles.bookingContainer)} {...props} />;
};

export const BookingTravelPointDropdown = ({
  children,
  ...props
}: BookingTravelPointDropdownProps) => {
  return (
    <div {...stylex.props(styles.bookingTravelPointDropdown)} {...props}>
      <Dropdown>{children}</Dropdown>
    </div>
  );
};

export const BookingTravelPoint = ({
  iata,
  title,
  ...props
}: BookingTravelPointProps) => {
  return (
    <div {...stylex.props(styles.bookingTravelPoint)} {...props}>
      <label>{iata}</label>
      <p>{title}</p>
    </div>
  );
};

export const BookingTravelPointSwapperButton = (
  props: BookingTravelPointSwapperButtonProps,
) => {
  return <Button {...props}>{Icons('IconSwap')}</Button>;
};

export const BookingSearchTravelPointModal = ({
  children,
  title,
  ...props
}: BookingSearchTravelPointModalProps) => {
  const { setIsShow } = useDropdown();
  return (
    <ModalContainer style={styles.bookingSearchTravelPointModal} {...props}>
      <ModalHeader
        title={title}
        hasCloseButton
        handleClose={() => setIsShow(false)}
      />
      <ModalBody style={styles.bookingSearchTravelPointModalBody}>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

type BookingTravelCountryBoxProps = React.ComponentPropsWithoutRef<'div'>;
export const BookingTravelCountryBox = (
  props: BookingTravelCountryBoxProps,
) => <div {...stylex.props(styles.bookingTravelCountryBox)} {...props} />;

export const BookingTravelCountryInput = React.forwardRef<
  HTMLInputElement,
  BookingTravelCountryInputProps
>(({ value, ...props }, ref) => {
  return (
    <label
      {...stylex.props(
        styles.bookingRadioLable,
        props.checked && styles.checked,
        props['aria-disabled'] && styles.disable,
      )}
      htmlFor={value}
    >
      <input
        {...stylex.props(styles.bookingTravelCountryInput)}
        id={value}
        name="travelCountry"
        type="radio"
        ref={ref}
        {...props}
      />
      {value}
    </label>
  );
});
BookingTravelCountryInput.displayName = 'BookingTravelCountryInput';

export const BookingTravelPointList = (props: BookingTravelPointListProps) => {
  return <ul {...stylex.props(styles.bookingTravelPointList)} {...props} />;
};

export const FlightIconWithText = ({
  children,
  iata,
  name,
  onClick,
  ...props
}: FlightIconWithTextProps) => {
  const { setIsShow } = useDropdown();
  return (
    <li
      {...stylex.props(
        styles.bookingTravelPointInput,
        props?.['aria-selected'] && styles.selected,
      )}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        setIsShow(false);
      }}
    >
      {Icons('IconDepartureFlight')}
      <h3>{iata}</h3>
      <label>{name}</label>
    </li>
  );
};

const styles = stylex.create({
  bookingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12.5rem',
  },
  bookingTravelPointDropdown: {
    width: '5rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bookingTravelPoint: {},
  bookingSearchTravelPointModal: {},
  bookingTravelPointInput: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem 1.5rem',
    borderColor: {
      default: 'none',
      ':hover': '#49cbff',
    },
    borderWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderStyle: {
      default: 'none',
      ':hover': 'solid',
    },
    borderRadius: '0.3vw',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  selected: {
    backgroundColor: '#49cbff',
  },
  bookingSearchTravelPointModalBody: {
    marginTop: '1rem',
  },
  bookingTravelCountryInput: {
    display: 'none',
  },
  bookingRadioLable: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    paddingLeft: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    borderRadius: '0.5vw',
    borderColor: {
      default: 'none',
      ':hover': '#49cbff',
    },
    borderWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderStyle: {
      default: 'none',
      ':hover': 'solid',
    },
  },
  checked: {
    backgroundColor: 'white',
  },
  disable: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
  bookingTravelCountryBox: {
    backgroundColor: '#f0f0f0',
    flex: '1',
    padding: '0.3rem',
    borderBlockWidth: '1px',
    borderColor: '#f0f0f0',
    borderStyle: 'solid',
    borderRadius: '0.5vw',
  },
  bookingTravelPointList: {
    flex: '2',
  },
});

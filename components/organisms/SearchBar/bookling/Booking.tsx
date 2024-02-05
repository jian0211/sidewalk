import { Button, ButtonProps } from '@/components/atoms/Button';
import { DepartureFlightIcon, SwapIcon } from '@/components/atoms/Icon';
import { Dropdown } from '@/components/molecules/dropdown/Dropdown';
import {
  ModalBody,
  ModalContainer,
  ModalContainerProps,
  ModalHeader,
} from '@/components/molecules/modal/Modal';
import { useDropdown } from '@/hooks/providers/ModalOpenControllProvider';
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
  iata: string;
  name: string;
};
type BookingTravelPointListProps = React.ComponentPropsWithoutRef<'ul'>;

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
  return (
    <Button {...props}>
      <SwapIcon />
    </Button>
  );
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
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

export const BookingTravelPointList = (props: BookingTravelPointListProps) => {
  return <ul {...props} />;
};

export const FlightIconWithText = ({
  children,
  iata,
  name,
  ...props
}: FlightIconWithTextProps) => {
  return (
    <li {...stylex.props(styles.bookingTravelPointInput)} {...props}>
      <DepartureFlightIcon />
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
  flightIconWithText: {},
  bookingTravelPointInput: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem 2rem',
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
    cursor: 'pointer',
  },
});

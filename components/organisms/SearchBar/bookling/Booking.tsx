import { Button, ButtonProps } from '@/components/atoms/Button';
import { SwapIcon } from '@/components/atoms/Icon';
import { DropdownWarpper } from '@/components/molecules/dropdown/Dropdown';
import {
  ModalBody,
  ModalContainer,
  ModalContainerProps,
  ModalHeader,
} from '@/components/molecules/modal/Modal';
import * as stylex from '@stylexjs/stylex';

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

export const BookingContainer = (props: BookingContainerProps) => {
  return <div {...stylex.props(styles.bookingContainer)} {...props} />;
};

export const BookingTravelPointDropdown = ({
  children,
  ...props
}: BookingTravelPointDropdownProps) => {
  return (
    <div {...stylex.props(styles.bookingTravelPointDropdown)} {...props}>
      <DropdownWarpper>{children}</DropdownWarpper>
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
      <h3>{iata}</h3>
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
  return (
    <ModalContainer style={styles.bookingSearchTravelPointModal} {...props}>
      <ModalHeader hasCloseButton title={title} />
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
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
});

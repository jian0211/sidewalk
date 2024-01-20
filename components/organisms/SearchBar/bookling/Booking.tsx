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
type BookingTravelPointButtonProps = ButtonProps;
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

export const BookingTravelPointDropdownButton = ({
  children,
  ...props
}: BookingTravelPointButtonProps) => {
  return (
    <Button hasHoverBorder style={styles.bookingTravelPointButton} {...props}>
      <DropdownWarpper>{children}</DropdownWarpper>
    </Button>
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
    <ModalContainer {...props}>
      <ModalHeader title={title} />
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

const styles = stylex.create({
  bookingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16rem',
  },
  bookingTravelPointButton: {
    width: '5rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bookingTravelPoint: {},
});

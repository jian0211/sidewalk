import { Button, ButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

type BookingButtonProps = ButtonProps & {
  iata: string;
  name: string;
};

type TripTypeButtonProps = ButtonProps & {
  name: string;
};

export const BookingButton = ({ iata, name, ...props }: BookingButtonProps) => {
  return (
    <Button hasHoverBorder style={styles.bookingButton} {...props}>
      <h2>{iata}</h2>
      <p>{name}</p>
    </Button>
  );
};

export const TripTypeButton = ({ name, ...props }: TripTypeButtonProps) => {
  return (
    <Button style={styles.tripTypeButton} {...props}>
      {name}
    </Button>
  );
};

const styles = stylex.create({
  bookingButton: {
    width: '5rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tripTypeButton: {
    height: '100%',
    borderRadius: '1vw',
    padding: '0.6rem 1rem',
  },
});

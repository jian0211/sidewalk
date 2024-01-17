import { Button, ButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

type BookingButtonProps = ButtonProps & {
  iata: string;
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

const styles = stylex.create({
  bookingButton: {
    width: '5rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

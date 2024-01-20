import { Button, ButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

type TripTypeContainerProps = React.ComponentPropsWithoutRef<'div'>;
type TripTypeButtonProps = ButtonProps & {
  name: string;
};

export const TripTypeContainer = (props: TripTypeContainerProps) => {
  return <div {...stylex.props(styles.tripTypeContainer)} />;
};

export const TripTypeButton = ({ name, ...props }: TripTypeButtonProps) => {
  return <Button style={styles.tripTypeButton} {...props} />;
};

const styles = stylex.create({
  tripTypeContainer: {
    display: 'flex',
    widows: '7rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00256C',
    borderRadius: '1vw',
  },
  tripTypeButton: {
    height: '100%',
    borderRadius: '1vw',
    padding: '0.6rem 1rem',
  },
});

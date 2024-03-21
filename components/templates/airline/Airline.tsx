import { Button, ButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

type CategoryContainerProps = React.ComponentPropsWithoutRef<'div'>;

const CategoryContainer = (props: CategoryContainerProps) => {
  return <div {...props} {...stylex.props(styles.airlineCategoryContainer)} />;
};

const CategoryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      paddingLevel={{ paddingLeft: '20px', paddingRight: '20px' }}
      hasHoverBorder
    />
  );
};

export const Airline = {
  CategoryContainer,
  CategoryButton,
};

const styles = stylex.create({
  airlineCategoryContainer: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    gap: '1rem',
    alignItems: 'center',
    padding: '0 2rem',
  },
});

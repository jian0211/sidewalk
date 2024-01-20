import { CloseButton } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

export type ModalContainerProps = React.ComponentPropsWithoutRef<'div'>;
type ModalHeaderProps = React.ComponentPropsWithoutRef<'header'> & {
  title: string;
};
type ModaleBodyProps = React.ComponentPropsWithoutRef<'section'>;
type ModalFooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const ModalContainer = (props: ModalContainerProps) => {
  return <div {...props} />;
};

export const ModalHeader = ({ title, ...props }: ModalHeaderProps) => {
  return (
    <header {...stylex.props(styles.modalHeader)} {...props}>
      <h3>{title}</h3>
      <CloseButton />
    </header>
  );
};
export const ModalBody = (props: ModaleBodyProps) => {
  return <section {...props} />;
};

export const ModalFooter = (props: ModalFooterProps) => {
  return <footer {...props} />;
};

const styles = stylex.create({
  modalHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

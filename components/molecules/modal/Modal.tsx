import { CloseButton } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

export type ModalContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  style?: StyleXArray<any>;
};
type ModalHeaderProps = React.ComponentPropsWithoutRef<'header'> & {
  title: string;
  style?: StyleXArray<any>;
  hasCloseButton?: boolean;
};
type ModaleBodyProps = React.ComponentPropsWithoutRef<'section'>;
type ModalFooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const ModalContainer = ({ style, ...props }: ModalContainerProps) => {
  return <div {...stylex.props(styles.modalContainer, style)} {...props} />;
};

export const ModalHeader = ({
  title,
  style,
  hasCloseButton,
  ...props
}: ModalHeaderProps) => {
  return (
    <header {...stylex.props(styles.modalHeader, style)} {...props}>
      <h3>{title}</h3>
      {hasCloseButton && <CloseButton />}
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
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
    height: '100%',
    padding: '2rem',
    borderRadius: '1vw',
    // いつか共通部品に移動
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  },
  modalHeader: {
    flex: '1',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

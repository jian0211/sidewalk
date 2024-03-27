import { IconButton } from '@/components/atoms/Button';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { frameThemes, shadowThemes } from '@/components/styles';

export type ContainerProps = {
  style?: StyleXArray<any>;
} & React.ComponentPropsWithoutRef<'div'>;

type HeaderProps = {
  title: string;
  style?: StyleXArray<any>;
} & (
  | { hasCloseButton: true; handleClose: () => void }
  | { hasCloseButton?: false; handleClose?: never }
) &
  React.ComponentPropsWithoutRef<'header'>;
type BodyProps = {
  style?: StyleXArray<any>;
} & React.ComponentPropsWithoutRef<'section'>;
type FooterProps = React.ComponentPropsWithoutRef<'footer'>;

const Container = ({ style, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        frameThemes.roundEdged,
        shadowThemes.main,
        styles.container,
        style,
      )}
    />
  );
};

const Header = (props: HeaderProps) => {
  const { title, style, hasCloseButton, handleClose, ...rest } = props;
  return (
    <header {...rest} {...stylex.props(styles.header, style)}>
      <h3>{title}</h3>
      {hasCloseButton && (
        <IconButton
          onClick={handleClose}
          iconProps={{ src: 'IconX', width: 16 }}
        />
      )}
    </header>
  );
};

const Body = ({ style, ...props }: BodyProps) => {
  return <section {...props} {...stylex.props(styles.body, style)} />;
};

const Footer = (props: FooterProps) => <footer {...props} />;

export const Modal = { Container, Header, Body, Footer };

const styles = stylex.create({
  container: {
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
    height: '100%',
    padding: '0 2rem',
    backgroundColor: palette.baseWhite,
  },
  header: {
    flex: '1',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    marginTop: '0.5rem',
    borderBottomColor: palette.whiteSoftGray,
    borderBottomStyle: 'solid',
    borderBottomWidth: spacing.xxsmall,
  },
  body: {
    display: 'flex',
    maxHeight: '20rem',
    minHeight: '20rem',
    padding: '1rem 0',
  },
});

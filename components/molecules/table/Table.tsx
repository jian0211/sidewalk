import { ComponentPropsWithoutRef } from 'react';
import * as stylex from '@stylexjs/stylex';

type TableProps = ComponentPropsWithoutRef<'ul'>;
type RowProps = ComponentPropsWithoutRef<'li'>;
type HeaderProps = ComponentPropsWithoutRef<'li'>;
type ColumnProps = ComponentPropsWithoutRef<'div'> & {
  flex?: FlexLevel;
};
type FlexLevel = 'auto' | '1' | '2' | '3' | '4' | '5';

const Container = (props: TableProps) => {
  return <ul {...stylex.props(styles.container)} {...props} />;
};

const Header = (props: HeaderProps) => {
  return <li {...stylex.props(styles.row, styles.header)} {...props} />;
};

const Row = (props: RowProps) => {
  return <li {...stylex.props(styles.row)} {...props} />;
};

const Column = ({ flex = 'auto', ...props }: ColumnProps) => {
  return (
    <div {...stylex.props(styles.column, styles.flexLevel(flex))} {...props} />
  );
};

export const Table = {
  Container,
  Header,
  Row,
  Column,
};

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid red',
    gap: '0.5rem',
  },
  header: {},
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexLevel: (level: FlexLevel) => ({
    flex: level,
  }),
});

import { ComponentPropsWithoutRef } from 'react';
import * as stylex from '@stylexjs/stylex';

type TableProps = ComponentPropsWithoutRef<'ul'> & {
  useScroll?: boolean;
};
type RowProps = ComponentPropsWithoutRef<'li'>;
type HeaderProps = ComponentPropsWithoutRef<'li'>;
type ColumnProps = ComponentPropsWithoutRef<'div'> & {
  flex?: FlexLevel;
  columnFlexDirection?: boolean;
};
type FlexLevel = 'auto' | '1' | '2' | '3' | '4' | '5';

const Container = ({ useScroll, ...props }: TableProps) => {
  return (
    <ul
      {...props}
      {...stylex.props(styles.container, useScroll && styles.useScroll)}
    />
  );
};

const Header = (props: HeaderProps) => {
  return <li {...props} {...stylex.props(styles.row, styles.header)} />;
};

const Row = (props: RowProps) => {
  return <li {...props} {...stylex.props(styles.row)} />;
};

const Column = ({
  flex = 'auto',
  columnFlexDirection,
  ...props
}: ColumnProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.column,
        styles.flexLevel(flex),
        columnFlexDirection && styles.useColumnFlexDirection,
      )}
    />
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
    gap: '0.5rem',
  },
  header: {
    backgroundColor: '#323648',
    color: 'white',
    fontWeight: 500,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    fontSize: '0.9rem',
    borderBottomColor: '#848797',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexLevel: (level: FlexLevel) => ({
    flex: level,
  }),
  useScroll: {
    overflow: 'scroll',
  },
  useColumnFlexDirection: {
    flexDirection: 'column',
    gap: '0.5rem',
  },
});

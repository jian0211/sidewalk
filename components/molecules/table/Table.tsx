import { ComponentPropsWithoutRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

type TableProps = ComponentPropsWithoutRef<'ul'> & {
  style?: StyleXArray<any>;
};
type RowProps = ComponentPropsWithoutRef<'li'>;
type HeaderProps = ComponentPropsWithoutRef<'li'>;
type BodyProps = ComponentPropsWithoutRef<'div'> & {
  useScroll?: boolean;
};
type ColumnProps = ComponentPropsWithoutRef<'div'> & {
  flex?: FlexLevel;
  columnFlexDirection?: boolean;
  width?: WidthLevel;
};
type FlexLevel = 'auto' | '1' | '2' | '3' | '4' | '5';
type WidthLevel = '100' | '200' | '300' | '400';

const Container = ({ style, ...props }: TableProps) => (
  <ul {...props} {...stylex.props(styles.container, style)} />
);

const Header = (props: HeaderProps) => (
  <li {...props} {...stylex.props(styles.row, styles.header)} />
);

const Row = (props: RowProps) => (
  <li {...props} {...stylex.props(styles.row)} />
);

const Column = ({
  flex,
  width,
  columnFlexDirection,
  ...props
}: ColumnProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.column,
        flex && styles.flexLevel(flex),
        width && styles.widthLevel(width),
        columnFlexDirection && styles.useColumnFlexDirection,
      )}
    />
  );
};

const Body = ({ useScroll, ...props }: BodyProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.body, useScroll && styles.useScroll)}
    />
  );
};

export const Table = {
  Container,
  Header,
  Row,
  Column,
  Body,
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
  body: {
    height: '100%',
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
    backgroundColor: {
      default: 'none',
      ':hover': 'skyblue',
    },
    cursor: 'pointer',
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexLevel: (level: FlexLevel) => ({
    flex: level,
  }),
  widthLevel: (width: WidthLevel) => ({
    width: width + 'px',
  }),
  useScroll: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  useColumnFlexDirection: {
    flexDirection: 'column',
    gap: '0.5rem',
  },
});

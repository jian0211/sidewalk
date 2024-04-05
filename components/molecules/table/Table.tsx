import { ComponentPropsWithoutRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { DesignProps, designStyles } from '@/components/styles';
import { palette } from '../../../styles/globalTokens.stylex';

export type TableProps = ComponentPropsWithoutRef<'ul'> & {
  style?: StyleXArray<any>;
};
export type RowProps = ComponentPropsWithoutRef<'li'>;
export type HeaderProps = ComponentPropsWithoutRef<'li'>;
type BodyProps = ComponentPropsWithoutRef<'div'> & {
  useScroll?: boolean;
};
type ColumnProps = ComponentPropsWithoutRef<'div'> &
  Pick<DesignProps, 'flex' | 'size'>;

const Container = ({ style, ...props }: TableProps) => (
  <ul
    {...props}
    {...stylex.props(
      designStyles['size']({ width: '100%' }),
      designStyles['radius']({
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }),
      designStyles['bgColor']({ color: 'baseWhite' }),
      designStyles['flex']({
        flexDirection: 'column',
        justifyContent: 'start',
        gap: 'small',
      }),
      designStyles['border']({
        borderColor: 'softGray',
        borderWidth: '2px',
        hoverColor: 'softGray',
      }),
      style,
    )}
  />
);
const Header = (props: HeaderProps) => (
  <li
    {...props}
    {...stylex.props(
      styles.header,
      designStyles['size']({
        width: '100%',
        height: '4rem',
      }),
      designStyles['padding']({
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '16px',
      }),
      designStyles['font']({
        fontSize: 'small',
        fontWeight: 'bold',
      }),
      designStyles['flex']({ alignItems: 'center' }),
      designStyles['bgColor']({ color: 'transparent' }),
    )}
  />
);

const Row = (props: RowProps) => (
  <li
    {...props}
    {...stylex.props(
      styles.row,
      designStyles['font']({
        fontSize: 'xsmall',
        fontWeight: 'medium',
      }),
      designStyles['flex']({ alignItems: 'center', gap: 'small' }),
      designStyles['padding']({
        paddingBottom: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '8px',
      }),
    )}
  />
);

const Column = (props: ColumnProps) => {
  const { flex, size, ...rest } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        size && designStyles['size'](size),
        flex && designStyles['flex'](flex),
      )}
    />
  );
};

const Body = ({ useScroll, ...props }: BodyProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['size']({ height: '100%' }),
        useScroll && styles.useScroll,
      )}
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
  useScroll: {
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: palette['softGray'],
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
  },
  row: {
    borderBottomColor: palette['softGray'],
    borderBottomStyle: 'solid',
    borderBottomWidth: '2px',
  },
});

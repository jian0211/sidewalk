import { ComponentPropsWithoutRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { DesignProps, designStyles } from '@/components/styles';

type TableProps = ComponentPropsWithoutRef<'ul'> & {
  style?: StyleXArray<any>;
};
type RowProps = ComponentPropsWithoutRef<'li'>;
type HeaderProps = ComponentPropsWithoutRef<'li'>;
type BodyProps = ComponentPropsWithoutRef<'div'> & {
  useScroll?: boolean;
};
type ColumnProps = ComponentPropsWithoutRef<'div'> &
  Pick<DesignProps, 'hasFlex' | 'size'>;

const Container = ({ style, ...props }: TableProps) => (
  <ul
    {...props}
    {...stylex.props(
      designStyles['size']({ width: '100%' }),
      designStyles['radius']('16px'),
      designStyles['bgColor']({ color: 'baseWhite' }),
      designStyles['flex']({
        flexDirection: 'column',
        gap: '8px',
      }),
      designStyles['border']({ color: 'softGray', width: '2px' }),
      style,
    )}
  />
);
const Header = (props: HeaderProps) => (
  <li
    {...props}
    {...stylex.props(
      designStyles['size']({
        width: '100%',
        height: '4rem',
      }),
      designStyles['padding']('1rem'),
      designStyles['customRadius']({
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }),
      designStyles['font']({
        fontSize: '1rem',
        fontWeight: 600,
      }),
      designStyles['flex']({ alignItems: 'center', justifyContent: 'center' }),
      designStyles['bgColor']({ color: 'transparent' }),
      designStyles['customBorder']({
        Bottom: { color: 'softGray', width: '2px' },
      }),
    )}
  />
);

const Row = (props: RowProps) => (
  <li
    {...props}
    {...stylex.props(
      designStyles['font']({
        fontSize: '0.9rem',
        fontWeight: 500,
      }),
      designStyles['flex']({
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }),
      designStyles['bgColor']({ color: 'transparent' }),
      designStyles['padding']('8px'),
      designStyles['customBorder']({
        Bottom: { color: 'softGray', width: '2px' },
      }),
    )}
  />
);

const Column = (props: ColumnProps) => {
  const { hasFlex, size, ...rest } = props;
  return (
    <div
      {...rest}
      {...stylex.props(
        designStyles['flex']({
          alignItems: 'center',
          justifyContent: 'center',
        }),
        hasFlex &&
          designStyles['flex']({
            flex: hasFlex.flex,
            flexDirection: hasFlex.flexDirection,
            justifyContent: hasFlex.justifyContent,
            alignItems: hasFlex.alignItems,
            gap: hasFlex.gap,
          }),
        size &&
          designStyles['size']({ width: size.width, height: size.height }),
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
});

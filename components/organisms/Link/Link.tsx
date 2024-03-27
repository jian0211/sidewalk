import { LinkProps } from '@/types/path';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import Link from 'next/link';

export type BasicLinkProps = LinkProps & {
  style?: StyleXArray<any>;
};

export const BasicLink = ({ href, ...props }: BasicLinkProps) => {
  return <Link {...props} href={href} {...stylex.props(styles.basicLink)} />;
};

const styles = stylex.create({
  basicLink: {
    color: {
      default: 'inherit',
      ':hover': null,
      ':active': null, //[TODO]: Default CSSに
    },
    backgroundColor: {
      default: 'Inherit',
      ':hover': null,
    },
  },
});

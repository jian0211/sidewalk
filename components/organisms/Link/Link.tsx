import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// [TODO]:path のところに移動
type LinkProps = {
  href: `${'/ja' | '/ko'}${'' | '/airports' | '/airlines' | '/profile'}${
    | ''
    | '/schedule'}`;
};
export type BasicLinkProps = React.ComponentPropsWithRef<'a'> &
  LinkProps & {
    style?: StyleXStyles;
    title: string;
    borderHover?: boolean;
    indent?: boolean;
  };

export const BasicLink = (props: BasicLinkProps) => {
  const { style, href, title, borderHover, indent, ...rest } = props;
  const path = usePathname();
  const isCurrentPath = path === href;
  return (
    <Link
      href={href}
      {...stylex.props(
        styles.basicLink,
        borderHover && styles.borderHover,
        indent && styles.indent,
        isCurrentPath && styles.currentPath,
        style, // errorになるんですが、問題ない
      )}
      {...rest}
    >
      {title}
    </Link>
  );
};

const styles = stylex.create({
  basicLink: {
    display: 'flex',
    alignItems: 'center',
    padding: `1rem 2rem`,
    width: '100%',
    height: '4rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: {
      default: '#9AA0AD',
      ':hover': '#28176D',
      ':active': '#28176D', //[TODO]: Default CSSに
    },
    backgroundColor: {
      default: 'Inherit',
      ':hover': '#F0F0F7',
    },
  },
  currentPath: {
    color: '#28176D',
  },
  borderHover: {
    borderBottomWidth: {
      default: 'none',
      ':hover': '1px',
    },
    borderBottomStyle: {
      default: 'none',
      ':hover': 'solid',
    },
    borderBottomColor: {
      default: 'none',
      ':hover': '#28176D',
    },
  },
  indent: {
    paddingLeft: '4rem',
  },
});

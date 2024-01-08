import * as stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

type BaseHeadingProps = {
  children: ReactNode;
  style?: stylex.StaticStyles<{
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
  }>;
};

// style Propsにエラーがある確認する
export const H1: React.FC<BaseHeadingProps> = ({
  style,
  ...props
}: BaseHeadingProps) => {
  return <h1 {...stylex.props(styles.heading, style)} {...props} />;
};
export const H2 = ({ children }: BaseHeadingProps) => {
  return <h2>{children}</h2>;
};
export const H3 = ({ children }: BaseHeadingProps) => {
  return <h3>{children}</h3>;
};

const styles = stylex.create({
  heading: {
    fontSize: 20,
  },
});

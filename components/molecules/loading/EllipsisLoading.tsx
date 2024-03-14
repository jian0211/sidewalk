import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';

type EllipsisLoadingProps = ComponentPropsWithoutRef<'div'>;

export const EllipsisLoading = (props: EllipsisLoadingProps) => {
  return (
    <div {...props} {...stylex.props(styles.ellipsis)}>
      <div {...stylex.props(styles.ellipsisChild, styles.firstChild)} />
      <div {...stylex.props(styles.ellipsisChild, styles.secondChild)} />
      <div {...stylex.props(styles.ellipsisChild, styles.thirdChild)} />
    </div>
  );
};
const ellipsisAnimation = stylex.keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
});

const styles = stylex.create({
  ellipsis: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  ellipsisChild: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'black',
    animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
  },
  firstChild: {
    animationName: ellipsisAnimation,
    animationDuration: '0.7s',
    animationIterationCount: 'infinite',
    animationDelay: '-0.7s',
  },
  secondChild: {
    animationName: ellipsisAnimation,
    animationDuration: '0.7s',
    animationIterationCount: 'infinite',
    animationDelay: '-0.6s',
  },
  thirdChild: {
    animationName: ellipsisAnimation,
    animationDuration: '0.7s',
    animationIterationCount: 'infinite',
    animationDelay: '-0.5s',
  },
});

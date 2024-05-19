import { DesignProps } from '@/components/styles';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';

type EllipsisLoadingProps = {
  sizeProps?: DesignProps['size'];
} & ComponentPropsWithoutRef<'div'>;

export const EllipsisLoading = (props: EllipsisLoadingProps) => {
  const { sizeProps, ...rest } = props;
  const _sizeProps = {
    width: sizeProps?.width ?? '6px',
    height: sizeProps?.height ?? '6px',
  };

  return (
    <div {...rest} {...stylex.props(styles.ellipsis)}>
      <div
        {...stylex.props(styles.ellipsisChild(_sizeProps), styles.firstChild)}
      />
      <div
        {...stylex.props(styles.ellipsisChild(_sizeProps), styles.secondChild)}
      />
      <div
        {...stylex.props(styles.ellipsisChild(_sizeProps), styles.thirdChild)}
      />
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
  ellipsisChild: (props) => ({
    width: props.width,
    height: props.height,
    borderRadius: '50%',
    backgroundColor: 'black',
    animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
  }),
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

import { Icons } from '@/components/atoms/Icon';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';
import { DesignProps, designStyles } from '@/components/styles';
import { useSliding } from '@/store/sliding';
import { useEffect } from 'react';

type SlidingProps = {
  xstyles?: StyleXArray<any>;
  isShow?: boolean;
  bgColorProps?: DesignProps['bgColor'];
} & React.ComponentProps<'div'>;
type HandleGripProps = React.ComponentProps<'span'>;

const SLIDING_WIDTH = 45;

export const Sliding = (props: SlidingProps) => {
  const { xstyles, isShow, bgColorProps, children, ref, ...rest } = props;
  const { isSliding, setIsSliding } = useSliding();

  const openControlObj = {
    isShow,
    isSliding,
  };

  const isOpen = Object.values(openControlObj).some(Boolean);
  if (isOpen) setIsSliding((prev) => (prev === true ? isOpen : prev));

  const slidingWidth = isOpen ? 0 : -SLIDING_WIDTH;

  useEffect(() => {
    return () => {
      setIsSliding(false);
    };
  }, [setIsSliding]);

  return (
    <div
      {...rest}
      {...stylex.props(
        styles['slidingPanel']({ left: `${slidingWidth}rem` }),
        bgColorProps && designStyles['bgColor'](bgColorProps),
        isOpen && styles['openSlidingPanel'],
        // !isOpen && styles['closeSlidingPanel']({ left: `${slidingWidth}rem` }),
        xstyles,
      )}
    >
      {children}
      <HandleGrip />
    </div>
  );
};

const HandleGrip = (props: HandleGripProps) => {
  const { ...rest } = props;
  const { isSliding, setIsSliding } = useSliding();
  const handleClick = () => {
    setIsSliding((prev) => !prev);
  };
  return (
    <span
      {...rest}
      {...stylex.props(styles['handleGrip'](isSliding))}
      onClick={handleClick}
    >
      <Icons src={isSliding ? 'IconArrowPrev' : 'IconArrowNext'} width={15} />
    </span>
  );
};

const openSliding = stylex.keyframes({
  '0%': { left: `-${SLIDING_WIDTH}rem` },
  '100%': { left: 0 },
});
const closeSliding = stylex.keyframes({
  '0%': { left: `-${SLIDING_WIDTH}rem` },
  '100%': { left: `-${SLIDING_WIDTH}rem` },
});

const styles = stylex.create({
  slidingPanel: (props) => ({
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    width: `${SLIDING_WIDTH}rem`,
    height: '815px',
    alignItems: 'center',
    left: props.left,
  }),
  handleGrip: (props) => ({
    position: 'absolute',
    right: '-1rem',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: {
      default: palette[props ? 'skyBlue' : 'softGray'],
      ':hover': palette['skyBlue'],
    },
    width: '1rem',
    height: '20rem',
    borderTopRightRadius: spacing['small'],
    borderBottomRightRadius: spacing['small'],
    borderTopLeftRadius: spacing['none'],
    borderBottomLeftRadius: spacing['none'],
    cursor: 'pointer',
  }),
  showSliding: {
    visibility: 'hidden',
  },
  closeSlidingPanel: (props) => ({
    left: props.left,
    animationName: closeSliding,
    animationDuration: '1s',
  }),
  openSlidingPanel: {
    animationName: openSliding,
    animationDuration: '1s',
  },
});

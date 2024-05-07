import { Icons } from '@/components/atoms/Icon';
import {
  SlidingPanelContextProvider,
  useSliding,
} from '@/hooks/providers/SlidingPanelProvider';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

type SlidingBaseProps = {
  xstyles?: StyleXArray<any>;
  isShow?: boolean;
} & React.ComponentProps<'div'>;
type HandleGripProps = React.ComponentProps<'span'>;

export const SlidingPanel = (props: SlidingBaseProps) => {
  return (
    <SlidingPanelContextProvider>
      <SlidingBase {...props} />
    </SlidingPanelContextProvider>
  );
};

const SlidingBase = (props: SlidingBaseProps) => {
  const { xstyles, isShow, children, ...rest } = props;
  const { isSlidingShow, setSlidingIsShow } = useSliding();
  const slidingWidth = isSlidingShow ? 0 : -40;

  if (isShow) setSlidingIsShow((prev) => (prev === true ? isShow : prev));

  return (
    <div
      {...rest}
      {...stylex.props(
        styles['slidingPanel']({ left: `${slidingWidth}rem` }),
        styles[isSlidingShow ? 'openSlidingPanel' : 'closeSlidingPanel'],
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
  const { isSlidingShow, setSlidingIsShow } = useSliding();
  const handleClick = () => {
    setSlidingIsShow((prev) => !prev);
  };
  return (
    <Icons
      {...rest}
      onClick={handleClick}
      src={isSlidingShow ? 'IconArrowPrev' : 'IconArrowNext'}
      width={15}
      useCursor
      style={styles['handleGrip']}
    />
  );
};

const openSliding = stylex.keyframes({
  '0%': {
    left: '-40rem',
  },
  '100%': {
    left: 0,
  },
});
const closeSliding = stylex.keyframes({
  '0%': {
    left: 0,
  },
  '100%': {
    left: '-40rem',
  },
});

const styles = stylex.create({
  slidingPanel: (props) => ({
    position: 'absolute',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    left: props.left,
  }),
  handleGrip: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: palette['softGray'],
    width: '1rem',
    height: '20rem',
    borderTopRightRadius: spacing['small'],
    borderBottomRightRadius: spacing['small'],
    borderTopLeftRadius: spacing['none'],
    borderBottomLeftRadius: spacing['none'],
    cursor: 'pointer',
  },
  showSliding: {
    visibility: 'hidden',
  },
  closeSlidingPanel: {
    animationName: closeSliding,
    animationDuration: '1s',
  },
  openSlidingPanel: {
    animationName: openSliding,
    animationDuration: '1s',
  },
});

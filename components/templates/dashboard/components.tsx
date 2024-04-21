import { Icons } from '@/components/atoms/Icon';
import {
  PaletteVars,
  fontProperties,
  fontSizing,
  fontWeight,
  palette,
} from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';

type ContainerProps = React.ComponentProps<'section'>;
type ArticleProps = React.ComponentProps<'article'>;
type ArticleBodyProps = React.ComponentProps<'div'>;
type BoxProps = {
  theme: 'graph' | 'square' | 'rectangle';
  title: string;
} & React.ComponentProps<'div'>;
type PanelHeaderProps = React.ComponentProps<'div'>;
type PanelTitleProps = React.ComponentProps<'h3'>;
type IconWithTextProps = {
  colorProps?: Partial<ColorProps>;
} & React.ComponentProps<'p'>;
type ParagraphProps = React.ComponentProps<'p'>;
type TextProps = Partial<FontProps> &
  Partial<ColorProps> &
  React.ComponentProps<'span'>;
type FontProps = {
  fontSize: keyof (typeof fontProperties)['size'];
  fontWeight: keyof (typeof fontProperties)['weight'];
};
type ColorProps = {
  color: PaletteVars;
};
type ArticleHeaderProps = React.ComponentProps<'div'>;
type ArticleHeaderTitleProps = React.ComponentProps<'span'>;
type VerticalRotationIconProps = React.ComponentProps<'span'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles['container'])} />;
};

const Article = (props: ArticleProps) => {
  return <article {...props} {...stylex.props(styles['article'])} />;
};
const ArticleHeader = (props: ArticleHeaderProps) => {
  return <div {...props} {...stylex.props(styles['articleHeader'])} />;
};
const ArticleBody = (props: ArticleBodyProps) => {
  return <div {...props} {...stylex.props(styles['articleBody'])} />;
};
const ArticleHeaderTitle = (props: ArticleHeaderTitleProps) => {
  return <span {...props} {...stylex.props(styles['articleHeaderTitle'])} />;
};
const Panel = (props: BoxProps) => {
  const { theme, children, title, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(themes[theme], styles['panel'])}>
      <div {...stylex.props(styles['titleBox'])}>
        <p {...stylex.props(styles['boxTitle'])}>{title}</p>
      </div>
      {children}
    </div>
  );
};

const PanelHeader = (props: PanelHeaderProps) => {
  return <div {...props} {...stylex.props(styles['panelHeader'])} />;
};

const PanelTitle = (props: PanelTitleProps) => {
  return <h3 {...props} {...stylex.props(styles['panelTitle'])} />;
};
type PanelBodyProps = React.ComponentProps<'div'>;
type PanelBottomProps = React.ComponentProps<'div'>;

const PanelBody = (props: PanelBodyProps) => {
  return <div {...props} {...stylex.props(styles['panelBody'])} />;
};

const PanelBottom = (props: PanelBottomProps) => {
  return <div {...props} {...stylex.props(styles['panelBottom'])} />;
};

const IconWithText = (props: IconWithTextProps) => {
  const { children, colorProps, ...rest } = props;
  return (
    <p {...rest} {...stylex.props(styles['iconWithText'])}>
      <Icons src="IconTime" width={20} />
      <Text fontSize="xsmall" {...colorProps}>
        {children}
      </Text>
    </p>
  );
};

const Paragraph = (props: ParagraphProps) => {
  return <p {...props} {...stylex.props(styles['paragraph'])} />;
};

const Text = (props: TextProps) => {
  const {
    fontSize = 'small',
    fontWeight = 'normal',
    color = 'darkGray',
    ...rest
  } = props;
  return (
    <span
      {...rest}
      {...stylex.props(styles.text({ fontSize, fontWeight, color }))}
    />
  );
};

const VerticalRotationIcon = (props: VerticalRotationIconProps) => {
  const { children, ...rest } = props;
  return (
    <span {...rest} {...stylex.props(animations['verticalRotationIcon'])}>
      <Icons
        src="IconCurrencyKrw"
        width={50}
        style={animations['frontIconAnimation']}
      />
      <Icons
        customPostition={{
          left: 0,
        }}
        src="IconCurrencyJpy"
        width={50}
        style={animations['backIconAnimation']}
      />
    </span>
  );
};

export const Dashboard = {
  Container,
  Article,
  ArticleBody,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody,
  PanelBottom,
  IconWithText,
  Paragraph,
  Text,
  ArticleHeader,
  ArticleHeaderTitle,
  VerticalRotationIcon,
};

const verticalRotationAnimationFront = stylex.keyframes({
  '0%': {
    opacity: 0,
  },
  '48%': {
    opacity: 0,
  },
  '50%': {
    transform: 'rotateY(-90deg)',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)',
    opacity: 1,
  },
  '75%': {
    transform: 'rotateY(180deg)',
    animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)',
  },
  '100%': {
    transform: 'rotateY(270deg)',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)',
  },
});

const verticalRotationAnimationBack = stylex.keyframes({
  '0%': {
    transform: 'rotateY(-90deg)',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)',
  },
  '25%': {
    transform: 'rotateY(180deg)',
    animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)',
  },
  '49%': {
    opacity: 1,
    transform: 'rotateY(270deg)',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)',
  },
  '50%': {
    opacity: 0,
  },
  '100%': {
    opacity: 0,
  },
});

const styles = stylex.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginInline: '2rem',
    paddingBlock: '2rem',
    width: 'calc(100% - 2rem)',
    height: '50rem',
    overflowY: 'scroll',
  },
  article: {
    width: '100%',
    height: 'fit-content',
  },
  articleHeader: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    width: '100%',
    height: '5rem',
    paddingBlock: '1rem',
  },
  articleBody: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.3rem',
    height: 'fit-content',
    alignContent: 'flex-start',
  },
  panel: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette['whiteSoftGray'],
    borderRadius: '1vw',
    width: '100%',
    height: 'auto',
    padding: '1rem 2rem',
  },
  titleBox: {
    top: 0,
    right: '0',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '8px',
    paddingBottom: '8px',
    width: '40%',
    height: '3rem',
    borderBottomLeftRadius: '1vw',
    backgroundColor: 'white',

    '::before': {
      content: '',
      top: '0',
      left: '-1rem',
      position: 'absolute',
      backgroundColor: palette['whiteSoftGray'],
      width: '1rem',
      height: '1rem',
      borderRadius: '0 1vw 0 0',
      boxShadow: '4px -4px 0 4px white',
    },
    '::after': {
      content: '',
      position: 'absolute',
      bottom: '-16px',
      right: 0,
      backgroundColor: palette['whiteSoftGray'],
      width: '1rem',
      height: '1rem',
      borderRadius: '0 1vw 0 0',
      boxShadow: '4px -4px 0 4px white',
    },
  },
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 8px)',
    height: '36px',
    backgroundColor: palette['whiteSoftGray'],
    borderRadius: '14px',
    borderColor: palette['whiteSoftGray'],
    color: palette['deepSky'],
    borderStyle: 'solid',
    fontSize: fontSizing['small'],
    fontWeight: fontWeight['bold'],
  },
  panelHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '60%',
    height: '30px',
  },
  panelTitle: {
    fontSize: fontSizing['large'],
  },
  panelBody: {
    flex: 'auto',
    paddingBlock: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  panelBottom: {
    marginTop: 'auto',
  },
  text: (props: FontProps & ColorProps) => ({
    fontSize: fontSizing[props.fontSize],
    fontWeight: fontWeight[props.fontWeight],
    color: palette[props.color],
  }),
  iconWithText: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  paragraph: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  articleHeaderTitle: {
    fontSize: fontSizing['xlarge'],
    fontWeight: fontWeight['bold'],
  },
});

const DEFAULT_WIDTH = '23rem';
const themes = stylex.create({
  square: {
    width: DEFAULT_WIDTH,
    minWidth: DEFAULT_WIDTH,
    maxWidth: DEFAULT_WIDTH,
    height: DEFAULT_WIDTH,
    minHeight: DEFAULT_WIDTH,
    maxHeight: DEFAULT_WIDTH,
  },
  rectangle: {
    width: DEFAULT_WIDTH,
    minWidth: DEFAULT_WIDTH,
    maxWidth: DEFAULT_WIDTH,
    height: '12rem',
    minHeight: '12rem',
    maxHeight: '12rem',
  },
  graph: {
    width: '71.5rem',
    minWidth: '71.5rem',
    maxWidth: '71.5rem',
    height: DEFAULT_WIDTH,
    minHeight: DEFAULT_WIDTH,
    maxHeight: DEFAULT_WIDTH,
  },
});

const animations = stylex.create({
  frontIconAnimation: {
    animationName: verticalRotationAnimationFront,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
  },
  backIconAnimation: {
    animationName: verticalRotationAnimationBack,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
  },
  verticalRotationIcon: { position: 'relative' },
});

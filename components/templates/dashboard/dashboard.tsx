import {
  fontSizing,
  fontWeight,
  palette,
} from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';

type ContainerProps = React.ComponentProps<'section'>;
type ArticleProps = React.ComponentProps<'article'>;
type BoxProps = {
  theme: 'graph' | 'square' | 'rectangle';
  title: string;
} & React.ComponentProps<'div'>;
type TitleProps = React.ComponentProps<'h3'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles['container'])} />;
};

const Article = (props: ArticleProps) => {
  return <article {...props} {...stylex.props(styles['article'])} />;
};

const Box = (props: BoxProps) => {
  const { theme, children, title, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles['box'], themes[theme])}>
      <div {...stylex.props(styles['titleBox'])}>
        <p {...stylex.props(styles['boxTitle'])}>{title}</p>
      </div>
      {children}
    </div>
  );
};

const Title = (props: TitleProps) => {
  return <h3 {...props} style={{ padding: '2rem' }} />;
};

export const Dashboard = { Container, Article, Box, Title };

const styles = stylex.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '50rem',
    padding: '2rem',
    // margin: '2rem',
    overflowY: 'scroll',
    gap: '1rem',
    border: '1px solid red',
  },
  article: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    height: 'fit-content',
    padding: '2rem',
    alignContent: 'flex-start',
  },
  box: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: palette['whiteSoftGray'],
    borderRadius: '1vw',
    border: '1px solid red',
    padding: '2rem',
  },
  titleBox: {
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
      //   backgroundColor: 'red',
      backgroundColor: palette['whiteSoftGray'],
      width: '1rem',
      height: '1rem',
      borderRadius: '0 1vw 0 0',
      boxShadow: '4px -4px 0 4px white',
    },
  },
  boxTitle: {
    width: 'calc(100% - 12px)',
    // paddingLeft: '8px',
    height: '36px',
    backgroundColor: palette['whiteSoftGray'], // palette['whiteSoftGray'],
    borderRadius: '14px',
    borderColor: palette['whiteSoftGray'], // palette['baseWhite'],
    borderStyle: 'solid',
    textAlign: 'center',
    fontSize: fontSizing['small'],
    fontWeight: fontWeight['medium'],
  },
});

const DEFAULT_WIDTH = '24rem';
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
    width: '73rem', //'calc(DEFAULT_WIDTH * 4)',
    minWidth: '73rem',
    maxWidth: '73rem',
    height: DEFAULT_WIDTH,
    minHeight: DEFAULT_WIDTH,
    maxHeight: DEFAULT_WIDTH,
    // aspectRatio: 3 / 1,
  },
});

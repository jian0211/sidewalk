import { palette } from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';

type ContainerProps = React.ComponentProps<'section'>;
type ArticleBoxProps = {
  theme: 'graph' | 'square' | 'rectangle';
} & React.ComponentProps<'article'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles.container)} />;
};

const ArticleBox = (props: ArticleBoxProps) => {
  const { theme, ...rest } = props;
  return (
    <article {...rest} {...stylex.props(styles['article'], themes[theme])} />
  );
};

export const Dashboard = { Container, ArticleBox };

const styles = stylex.create({
  container: {
    width: '100%',
    height: '50rem',
    overflowY: 'scroll',
    display: 'flex',
    padding: '2rem',
    gap: '1rem',
  },
  article: {
    border: '1px solid red',
    // width: '24rem',
    // height: '100vh',
    borderRadius: '1rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: palette['whiteSoftGray'],
  },
  radius: {},
});

// 비율로??
// samll 24rem
// middle 48rem
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
    height: 'calc(DEFAULT_WIDTH / 2)',
    minHeight: 'calc(DEFAULT_WIDTH / 2)',
    maxHeight: 'calc(DEFAULT_WIDTH / 2)',
  },
  graph: {
    width: 'calc(DEFAULT_WIDTH * 4)',
    minWidth: 'calc(DEFAULT_WIDTH * 4)',
    maxWidth: 'calc(DEFAULT_WIDTH * 4)',
    height: DEFAULT_WIDTH,
    minHeight: DEFAULT_WIDTH,
    maxHeight: DEFAULT_WIDTH,
  },
});

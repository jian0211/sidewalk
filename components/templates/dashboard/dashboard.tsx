import { palette } from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';

type ContainerProps = React.ComponentProps<'section'>;
type ArticleProps = React.ComponentProps<'article'>;
type BoxProps = {
  theme: 'graph' | 'square' | 'rectangle';
} & React.ComponentProps<'div'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles['container'])} />;
};

const Article = (props: ArticleProps) => {
  return <article {...props} {...stylex.props(styles['article'])} />;
};

const Box = (props: BoxProps) => {
  const { theme, children, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles['box'], themes[theme])}>
      <span {...stylex.props(styles.bossss)}>
        <span {...stylex.props(styles.testTitle)}>testvbale</span>
      </span>
      {children}
    </div>
  );
};

export const Dashboard = { Container, Article, Box };

const styles = stylex.create({
  container: {
    width: '100%',
    height: '50rem',
    // paddingBlock: '2rem',
    // marginInline: '2rem',
    padding: '2rem',
    margin: '2rem',
    overflowY: 'scroll',
    display: 'flex',
    gap: '1rem',
    border: '1px solid red',
  },
  article: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  box: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    borderRadius: '1vw',
  },
  bossss: {
    right: '0',
    position: 'absolute',
    // padding: '8px',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '8px',
    paddingBottom: '8px',
    width: 'fit-content',
    height: 'fit-content',
    borderBottomLeftRadius: '1vw',
    backgroundColor: 'white',

    '::before': {
      content: '',
      top: '0',
      left: '-1rem',
      position: 'absolute',
      backgroundColor: 'pink',
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
      backgroundColor: 'pink',
      width: '1rem',
      height: '1rem',
      borderRadius: '0 1vw 0 0',
      boxShadow: '4px -4px 0 4px white',
    },
  },
  testTitle: {
    display: 'table-cell',
    width: 'auto',
    height: '40px',
    backgroundColor: 'pink', // palette['whiteSoftGray'],
    paddingInline: '1rem',
    borderRadius: '1vw',
    borderColor: 'pink', // palette['baseWhite'],
    borderStyle: 'solid',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
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
    height: '12rem',
    minHeight: '12rem',
    maxHeight: '12rem',
  },
  graph: {
    width: '84rem', //'calc(DEFAULT_WIDTH * 4)',
    minWidth: '84rem',
    maxWidth: '84rem',
    height: DEFAULT_WIDTH,
    minHeight: DEFAULT_WIDTH,
    maxHeight: DEFAULT_WIDTH,
    // aspectRatio: 3 / 1,
  },
});

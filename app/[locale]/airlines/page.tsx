import * as stylex from '@stylexjs/stylex';

const AirlinesPage = () => {
  return (
    <div {...stylex.props(styles.test)}>
      <h1>AirlinesPage</h1>
    </div>
  );
};

export default AirlinesPage;

const styles = stylex.create({
  test: {
    width: '100%',
    backgroundColor: 'pink',
  },
});

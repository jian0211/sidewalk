import * as stylex from '@stylexjs/stylex';

const AirportPage = () => {
  return (
    <div {...stylex.props(styles.test)}>
      <h1>AirportPage</h1>
    </div>
  );
};

export default AirportPage;

const styles = stylex.create({
  test: {
    width: '100%',
    backgroundColor: 'pink',
  },
});

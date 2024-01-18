import { useLocale } from '@/hooks/useLocale';
import { JapanFlagIcon, KoreaFlagIcon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

type LocaleSwitcherProps = React.ComponentPropsWithoutRef<'button'>;

export const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const {
    states: { locale },
    actions: { handleChangeLocale },
  } = useLocale();
  return (
    <Button
      {...stylex.props(styles.localeSwitcher)}
      onClick={() => handleChangeLocale()}
    >
      {locale === 'ja' ? (
        <>
          <JapanFlagIcon />
          <p>日本語</p>
        </>
      ) : (
        <>
          <KoreaFlagIcon />
          <p>한국어</p>
        </>
      )}
    </Button>
  );
};

const styles = stylex.create({
  localeSwitcher: {
    // width: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    backgroundColor: 'whith',
  },
});

'use client';

import { useLocale } from '@/hooks/useLocale';
import { Icons } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';

export const LocaleSwitcher = () => {
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
          {Icons('IconKoreaFlag')}
          <p>韓国語</p>
        </>
      ) : (
        <>
          {Icons('IconJapanFlag')}
          <p>일본어</p>
        </>
      )}
    </Button>
  );
};

const styles = stylex.create({
  localeSwitcher: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    backgroundColor: 'whith',
  },
});

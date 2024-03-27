'use client';

import { useLocale } from '@/hooks/useLocale';
import { IconButton, IconButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { palette, spacing } from '../../../../styles/globalTokens.stylex';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { designStyles } from '@/components/styles';

export const LocaleSwitcher = () => {
  const t = useTranslatedWord('nav.translate');
  const {
    states: { locale },
    actions: { handleChangeLocale },
  } = useLocale();
  const [toggle, setToggle] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setToggle(false);
  });
  return (
    <div
      ref={ref}
      {...stylex.props(
        designStyles['padding']('8px'),
        designStyles['border']({ color: 'softGray', width: '2px' }),
        designStyles['flex']({
          alignItems: 'center',
          justifyContent: 'center',
        }),
        designStyles['radius']('8px'),
      )}
    >
      <IconButton
        iconProps={{ src: 'IconGlobal' }}
        onClick={() => setToggle((prev) => !prev)}
      />
      {toggle && (
        <div {...stylex.props(styles.localeSwitcher)}>
          <ToggleButton
            isSelected={locale === 'ko'}
            onClick={() => handleChangeLocale('ko')}
            iconProps={{ src: 'IconKoreaFlag' }}
          >
            <p>{t('korea')}</p>
          </ToggleButton>
          <ToggleButton
            isSelected={locale === 'ja'}
            onClick={() => handleChangeLocale('ja')}
            iconProps={{ src: 'IconJapanFlag' }}
          >
            <p>{t('japan')}</p>
          </ToggleButton>
        </div>
      )}
    </div>
  );
};

const ToggleButton = ({ iconProps: { src }, ...props }: IconButtonProps) => (
  <IconButton
    {...props}
    hasFlex={{
      alignItems: 'center',
      gap: '8px',
    }}
    hasBorder={{
      width: '2px',
      color: 'softGray',
      hoverColor: 'lightBlue',
    }}
    hasRadius="8px"
    paddingLevel={{
      paddingBottom: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '8px',
    }}
    iconProps={{
      src,
      useBorder: true,
      width: 40,
    }}
  />
);

const styles = stylex.create({
  localeSwitcher: {
    position: 'absolute',
    marginTop: spacing.medium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.small,
    fontSize: '1rem',
    backgroundColor: palette.baseWhite,
  },
});

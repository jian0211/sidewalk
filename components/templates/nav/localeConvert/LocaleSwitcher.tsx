'use client';

import { IconButton, IconButtonProps } from '@/components/atoms/Button';
import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { palette, spacing } from '../../../../styles/globalTokens.stylex';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { designStyles } from '@/components/styles';
import { Locales } from '@/types/locale';
import { usePathname, useRouter } from 'next/navigation';

type LocaleSwitcherProps = { locale: Locales } & React.ComponentProps<'div'>;
export const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const { locale, ...rest } = props;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslatedWord('nav.translate');
  const handleChangeLocale = (param: Locales) => {
    router.push(pathname.replace(locale, param));
  };
  const [toggle, setToggle] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => {
    setToggle(false);
  });

  const isCurrentLocale = (targetLocale: Locales) => {
    return locale === targetLocale;
  };
  return (
    <div
      {...rest}
      ref={ref}
      {...stylex.props(
        designStyles['position']('relative'),
        designStyles['flex']({
          alignItems: 'center',
          justifyContent: 'center',
        }),
        designStyles['padding']({
          paddingBottom: '8px',
          paddingLeft: '8px',
          paddingRight: '8px',
          paddingTop: '8px',
        }),
        designStyles['border']({
          borderWidth: '2px',
          borderColor: 'softGray',
          hoverColor: 'lightBlue',
        }),
        designStyles['radius']({
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }),
      )}
    >
      <IconButton
        iconProps={{ src: 'IconGlobal' }}
        onClick={() => setToggle((prev) => !prev)}
      />
      {toggle && (
        <div
          {...stylex.props(
            styles.localeSwitcher,
            designStyles['size']({ width: '150px' }),
          )}
        >
          <ToggleButton
            isSelected={isCurrentLocale('ko')}
            onClick={() => handleChangeLocale('ko')}
            iconProps={{ src: 'IconKoreaFlag' }}
          >
            <p>{t('korea')}</p>
          </ToggleButton>
          <ToggleButton
            isSelected={isCurrentLocale('ja')}
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
    flex={{
      alignItems: 'center',
      gap: 'small',
    }}
    border={{
      borderWidth: '2px',
      borderColor: 'softGray',
      hoverColor: 'lightBlue',
    }}
    radius={{
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}
    padding={{
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
    top: '4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.small,
    fontSize: '1rem',
    backgroundColor: palette.baseWhite,
  },
});

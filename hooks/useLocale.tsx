import { Locales } from '@/types/locale';
import { useLocale as _useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const useLocale = () => {
  const locale = _useLocale() as Locales;
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLocale = () => {
    const switchedLocale = locale === 'ko' ? 'ja' : 'ko';
    router.push(pathname.replace(locale, switchedLocale));
  };
  return {
    states: {
      locale,
    },
    actions: {
      handleChangeLocale,
    },
  };
};

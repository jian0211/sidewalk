import { Locales } from '@/types/locale';
import { useLocale as _useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const useLocale = () => {
  const locale = _useLocale() as Locales;
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLocale = (param: Locales) => {
    router.push(pathname.replace(locale, param));
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

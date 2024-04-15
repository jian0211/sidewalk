import { CurrentCurrenyProps } from './CurrenyCurreny';
import { Locales } from '@/types/locale';

export const useCurrentCurreny = () => {
  const panelTitle: Record<CurrentCurrenyProps['currenyType'], string> = {
    krw: '₩',
    jpy: '円',
  };

  /** デートフォマード */
  const formattedDate = (timestamp: number, locale: Locales) => {
    const date = new Date(timestamp);
    const _locale: Record<Locales, string> = {
      ko: 'ko-KR',
      ja: 'ja-JP',
    };
    return date.toLocaleString(_locale[locale], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  /** 負の数を判断 */
  const isNegative = (digit: number) => digit < 0;
  return {
    states: { panelTitle },
    actions: {
      isNegative,
      formattedDate,
    },
  };
};

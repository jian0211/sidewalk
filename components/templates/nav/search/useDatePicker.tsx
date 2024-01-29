import { Locales } from '@/types/locale';
import { useLocale } from 'next-intl';
import { ReactDatePickerProps } from 'react-datepicker';

export const useDatePicker = () => {
  const currentLocale = useLocale() as Locales;
  const dateFormat = () => {
    const DEFAULT_FORMAT = 'yyyy年 M月 d日';
    if (currentLocale === 'ko') {
      return DEFAULT_FORMAT.replace('年', '년')
        .replace('月', '월')
        .replace('日', '일');
    }
    return DEFAULT_FORMAT;
  };

  const datePickerSetting: Partial<ReactDatePickerProps> = {
    dateFormat: dateFormat(),
    monthsShown: 2,
    closeOnScroll: true,
    locale: currentLocale,
  };

  return {
    datePickerSetting,
  };
};

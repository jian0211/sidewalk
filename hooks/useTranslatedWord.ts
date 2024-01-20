import messages from '@/messages/ja.json';
import { NestedPropertyType } from '@/types/common';
import { useTranslations } from 'next-intl';
import { Path } from 'react-hook-form';

type Messages = typeof messages;

// ここの _textは String のタイプですが、ロジックが結構複雑のでAnyを使用しても構いませんでした。
export const useTranslatedWord = <T extends Path<Messages>>(word: T) => {
  const t = useTranslations(word);
  return <K extends Path<NestedPropertyType<Messages, T>>>(_word: K) =>
    t(_word as any);
};

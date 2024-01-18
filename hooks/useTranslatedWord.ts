import messages from '@/messages/ja.json';
import { useTranslations } from 'next-intl';
import { ArrayPath, Path } from 'react-hook-form';

type Messages = typeof messages;

/**
 * Object 中に Object ...
 * T が Objectの場合、中にある全てのKeysをもらって .をつける。
 * 使用ところは next-intl ライブラリを使う時
 */
type FlatKeysWithDot<T extends object, D extends string = ''> = {
  [K in keyof T]: `${D}${Exclude<K, symbol>}${
    | ''
    | (T[K] extends object ? FlatKeysWithDot<T[K], '.'> : '')}`;
}[keyof T];

// ここの _textは String のタイプですが、ロジックが結構複雑のでAnyを使用しても構いませんでした。
export const useTranslatedWord = <T extends keyof Messages>(word: T) => {
  const t = useTranslations(word);
  return <K extends FlatKeysWithDot<Messages[T]>>(_word: K) => t(_word as any);
};

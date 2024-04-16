import { IconNames } from '@/components/atoms/Icon';
import { useState } from 'react';
import { CurrenyKrwAndJpy } from './ExchangeRateCalculator';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

type Curreny = 'KRW' | 'JPY';
type MonetaryUnit = Record<Curreny, string>;
type Comment = Record<Curreny, string>;
type FlagIcons = Record<
  Curreny,
  Extract<IconNames, 'IconJapanFlag' | 'IconKoreaFlag'>
>;

export const useCalculator = (props: CurrenyKrwAndJpy) => {
  const [rateConverterkrAndJpy, setRateConverterkrAndJpy] =
    useState<Curreny>('JPY');
  const [targetMoney, setTargetMoney] = useState(1000);
  const toCurreny: Curreny = rateConverterkrAndJpy === 'JPY' ? 'KRW' : 'JPY';
  const flagIcons: FlagIcons = {
    JPY: 'IconJapanFlag',
    KRW: 'IconKoreaFlag',
  };
  const monetaryUnit: MonetaryUnit = {
    JPY: '円',
    KRW: '₩',
  };

  /**
   *  修正必要
   */
  const calculate = (targetCurreny: Curreny, money: number) => {
    if (targetCurreny === 'JPY') {
      return (money * props.curreny.krw) / 100;
    } else {
      return (money * props.curreny.jpy) / 100;
    }
  };

  return {
    states: {
      from: {
        curreny: rateConverterkrAndJpy,
        flagIcon: flagIcons[rateConverterkrAndJpy],
        unit: monetaryUnit[rateConverterkrAndJpy],
        value: targetMoney,
      },
      to: {
        curreny: toCurreny,
        flagIcon: flagIcons[toCurreny],
        unit: monetaryUnit[toCurreny],
        value: calculate(rateConverterkrAndJpy, targetMoney).toFixed(0),
      },
    },
    actions: {
      handleConvertRate: () => {
        setRateConverterkrAndJpy((prev) => (prev === 'JPY' ? 'KRW' : 'JPY'));
      },
      handleChangeMoney: (money: number) => {
        setTargetMoney(money);
      },
    },
  };
};

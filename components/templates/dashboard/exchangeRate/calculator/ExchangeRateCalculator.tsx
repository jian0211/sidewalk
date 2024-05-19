'use client';

import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Dashboard } from '../../components';
import { Flex, FlexProps } from '@/components/atoms/Flex';
import { IconNames, Icons } from '@/components/atoms/Icon';
import { B, Text } from '@/components/atoms/Text';
import * as stylex from '@stylexjs/stylex';
import { palette } from '../../../../../styles/globalTokens.stylex';
import { useCalculator } from './useCalculator';

export type CurrenyKrwAndJpy = { curreny: { krw: number; jpy: number } };
type ExchangeRateCalculatorProps = CurrenyKrwAndJpy &
  React.ComponentProps<'div'>;
type ContentProps = FlexProps;
type InputContainerProps = FlexProps;
type InputProps = React.ComponentProps<'input'>;
type IconWithTextProps = FlexProps & {
  icon: Extract<IconNames, 'IconJapanFlag' | 'IconKoreaFlag'>;
  text: string;
};

export const ExchangeRateCalculator = (props: ExchangeRateCalculatorProps) => {
  const { curreny, ...rest } = props;
  const { states, actions } = useCalculator({ curreny });
  const t = useTranslatedWord('dashboard.exchangeRate.calulator');
  return (
    <Dashboard.Panel {...rest} theme="square" title={t('title') + ''}>
      <Dashboard.PanelHeader>
        <Text fontProps={{ fontWeight: 'bold' }}>{states.from.curreny}</Text>
        <Icons src="IconArrowRight" />
        <Text fontProps={{ fontWeight: 'bold' }}>{states.to.curreny}</Text>
      </Dashboard.PanelHeader>
      <Dashboard.PanelBody>
        <Content>
          <IconWithText
            icon={states.from.flagIcon}
            text={
              states.from.curreny === 'JPY'
                ? t('comment.jpy') + ''
                : t('comment.krw') + ''
            }
          />
          <InputContainer>
            <Input
              defaultValue={states.from.value}
              onChange={(e) =>
                actions.handleChangeMoney(Number(e.currentTarget.value))
              }
            />
            <Text>{states.from.unit}</Text>
          </InputContainer>
        </Content>

        <ExchangeIconBox onClick={() => actions.handleConvertRate()} />

        <Content>
          <IconWithText
            icon={states.to.flagIcon}
            text={
              states.to.curreny === 'JPY'
                ? t('comment.jpy') + ''
                : t('comment.krw') + ''
            }
          />
          <InputContainer>
            <Input defaultValue={states.to.value} />
            <Text>{states.to.unit}</Text>
          </InputContainer>
        </Content>
      </Dashboard.PanelBody>
    </Dashboard.Panel>
  );
};

const Content = (props: ContentProps) => {
  return (
    <Flex
      {...props}
      flexProps={{ flexDirection: 'column', gap: 'medium' }}
      sizeProps={{ width: '100%', height: 'fit-content' }}
      paddingProps={{
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '16px',
      }}
      radiusProps={{
        borderBottomLeftRadius: '1vw',
        borderBottomRightRadius: '1vw',
        borderTopLeftRadius: '1vw',
        borderTopRightRadius: '1vw',
      }}
    />
  );
};

const InputContainer = (props: InputContainerProps) => {
  return (
    <Flex
      {...props}
      flexProps={{
        alignItems: 'center',
        justifyContent: 'end',
        gap: 'small',
      }}
    />
  );
};

const IconWithText = (props: IconWithTextProps) => {
  const { icon, text, ...rest } = props;
  return (
    <Flex {...rest} flexProps={{ alignItems: 'center', gap: 'medium' }}>
      <Icons src={icon} width={40} />
      <B>{text}</B>
    </Flex>
  );
};

const ExchangeIconBox = (props: FlexProps) => {
  return (
    <Flex
      {...props}
      flexProps={{ alignItems: 'center', justifyContent: 'center' }}
      paddingProps={{ paddingTop: '8px', paddingBottom: '8px' }}
    >
      <Icons src="IconExchange" width={40} useCursor />
    </Flex>
  );
};

const Input = (props: InputProps) => {
  return <input type="number" {...props} {...stylex.props(styles.input)} />;
};

const styles = stylex.create({
  input: {
    width: '100%',
    height: '2rem',
    backgroundColor: palette['baseWhite'],
    borderWidth: 0,
    borderRadius: '4px',
    paddingLeft: '8px',
  },
});

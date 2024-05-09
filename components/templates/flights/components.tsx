import { Sliding } from '@/components/molecules/sliding/Sliding';
import { SlidingPanelContextProvider } from '@/hooks/providers/SlidingPanelProvider';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import { Flex } from '@/components/atoms/Flex';
import { Text } from '@/components/atoms/Text';
import { DesignProps } from '@/components/styles';

type ContainerProps = React.ComponentProps<'section'>;
type GlobeMapBoxProps = React.ComponentProps<'div'>;
type ListBoxProps = React.ComponentProps<'ul'>;
type SlidingPanelProps = React.ComponentProps<'div'>;
type LiProps = React.ComponentProps<'li'>;
type LabelAndTextProps = {
  labelProps: {
    msg: string;
    fontProps?: DesignProps['font'];
    colorProps?: DesignProps['color'];
  };
  textProps: {
    msg: string;
    fontProps?: DesignProps['font'];
    colorProps?: DesignProps['color'];
  };
} & React.ComponentProps<'div'>;
type HrProps = React.ComponentProps<'div'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles['container'])} />;
};
const GlobeMapBox = (props: GlobeMapBoxProps) => {
  return <div {...props} {...stylex.props(styles['GlobeMapBox'])} />;
};

const SlidingPanelBox = (props: SlidingPanelProps) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} {...stylex.props(styles['slidingPanelBox'])}>
      <SlidingPanelContextProvider>
        <Sliding isShow={true}>{children}</Sliding>
      </SlidingPanelContextProvider>
    </div>
  );
};

const ListBox = (props: ListBoxProps) => {
  return <ul {...props} {...stylex.props(styles['listBox'])} />;
};

const Li = (props: LiProps) => {
  return <li {...props} {...stylex.props(styles['li'])} />;
};

const LabelAndText = (props: LabelAndTextProps) => {
  const { labelProps, textProps, ...rest } = props;
  return (
    <Flex
      {...rest}
      flexProps={{ alignItems: 'center', flexDirection: 'column' }}
    >
      <Text
        fontProps={labelProps.fontProps ?? { fontSize: 'small' }}
        colorProps={labelProps.colorProps}
      >
        {labelProps.msg}
      </Text>
      <Text
        fontProps={
          labelProps.fontProps ?? { fontSize: 'xxsmall', fontWeight: 'bold' }
        }
        colorProps={textProps.colorProps ?? { color: 'brightOrange' }}
      >
        {textProps.msg}
      </Text>
    </Flex>
  );
};

const Hr = (props: HrProps) => {
  return (
    <Flex
      {...props}
      flexProps={{ flexDirection: 'row', alignItems: 'center' }}
      sizeProps={{ width: '100%' }}
    >
      <span {...stylex.props(styles['hr'])} />
      <span {...stylex.props(styles['hrLine'])} />
      <span {...stylex.props(styles['hr'])} />
    </Flex>
  );
};

export const Flights = {
  Container,
  GlobeMapBox,
  SlidingPanelBox,
  ListBox,
  Li,
  LabelAndText,
  Hr,
};

const styles = stylex.create({
  container: {
    position: 'relative',
    width: '100%',
    maxHeight: 'calc(100% - 6rem)',
    height: '100%',
  },
  GlobeMapBox: {
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    maxHeight: 'inherit',
    overflow: 'hidden',
  },
  listBox: {
    backgroundColor: palette['whiteSoftGray'],
    width: '40rem',
    height: '815px',
    padding: '1rem',
  },
  slidingPanelBox: {
    position: 'relative',
    width: '40rem',
    height: '815px',
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '0 1rem',
    height: '5rem',
    borderRadius: '8px',
    backgroundColor: palette['baseWhite'],
  },
  hr: {
    height: spacing['small'],
    width: spacing['small'],
    backgroundColor: palette['softGray'],
    borderRadius: '50%',
  },
  hrLine: {
    height: '2px',
    width: '100%',
    backgroundColor: palette['softGray'],
  },
});

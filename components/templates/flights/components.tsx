import { Sliding } from '@/components/molecules/sliding/Sliding';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { palette, spacing } from '../../../styles/globalTokens.stylex';
import { Flex } from '@/components/atoms/Flex';
import { Text } from '@/components/atoms/text/Text';
import { DesignProps } from '@/components/styles';
import { Icons } from '@/components/atoms/Icon';
import { StyleXArray } from '@stylexjs/stylex/lib/StyleXTypes';

type ContainerProps = React.ComponentProps<'section'>;
type GlobeMapBoxProps = React.ComponentProps<'div'>;
type ListBoxProps = React.ComponentProps<'ul'>;
type SlidingPanelProps = { isShow?: boolean } & React.ComponentProps<'div'>;
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
type IconWithTitleProps = React.ComponentProps<'div'>;
type WrapperProps = { xstyle?: StyleXArray<any> } & React.ComponentProps<'div'>;
type ListHeaderProps = React.ComponentProps<'div'>;

const Container = (props: ContainerProps) => {
  return <section {...props} {...stylex.props(styles['container'])} />;
};
const GlobeMapBox = (props: GlobeMapBoxProps) => {
  return <div {...props} {...stylex.props(styles['GlobeMapBox'])} />;
};

const SlidingPanelBox = React.forwardRef<HTMLDivElement, SlidingPanelProps>(
  (props, ref) => {
    const { children, isShow = false, ...rest } = props;
    return (
      <div ref={ref}>
        <Sliding
          {...rest}
          isShow={isShow}
          bgColorProps={{ color: 'whiteSoftGray' }}
        >
          {children}
        </Sliding>
      </div>
    );
  },
);
SlidingPanelBox.displayName = 'SlidingPanelBox';

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

const IconWithTitle = (props: IconWithTitleProps) => {
  return (
    <Flex
      flexProps={{ flexDirection: 'row', gap: 'small', alignItems: 'center' }}
      paddingProps={{ paddingBottom: '10px' }}
    >
      <Icons src="IconSearchList" width={30} />
      <Text
        {...props}
        colorProps={{ color: 'darkGray' }}
        fontProps={{ fontSize: 'large', fontWeight: 'bold' }}
      />
    </Flex>
  );
};

const Wrapper = (props: WrapperProps) => {
  return (
    <Flex
      {...props}
      positionProps="absolute"
      xstyle={[props.xstyle, styles['wrapper']]}
      bgColorProps={{ color: 'whiteSoftGray' }}
      sizeProps={{ width: '100%' }}
      paddingProps={{ paddingTop: '10px', paddingLeft: '10px' }}
    />
  );
};

const ListHeader = (props: ListHeaderProps) => {
  return <div {...props} {...stylex.props(styles['listHeader'])} />;
};

export const Flights = {
  Container,
  GlobeMapBox,
  SlidingPanelBox,
  ListBox,
  Li,
  LabelAndText,
  Hr,
  IconWithTitle,
  Wrapper,
  ListHeader,
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
    top: 0,
    width: 'inherit',
    height: '100%',
    maxHeight: '815px',
    overflow: 'hidden',
  },
  listBox: {
    backgroundColor: palette['whiteSoftGray'],
    width: '44.5rem',
    height: 'calc(815px - 60px - 1rem)',
    padding: '0 1rem',
    overflowY: 'scroll',
  },
  slidingPanelBox: {
    position: 'relative',
    width: '45rem',
    height: '815px',
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '0 1rem',
    margin: '1rem 0',
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
  wrapper: {
    top: 0,
    height: 'inherit',
  },
  listHeader: {
    display: 'flex',
    alignItems: 'center',
  },
});

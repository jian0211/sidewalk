import { Sliding } from '@/components/molecules/sliding/Sliding';
import { SlidingPanelContextProvider } from '@/hooks/providers/SlidingPanelProvider';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import {
  fontSizing,
  fontWeight,
  palette,
} from '../../../styles/globalTokens.stylex';

type ContainerProps = React.ComponentProps<'section'>;
type GlobeMapBoxProps = React.ComponentProps<'div'>;
type ListBoxProps = React.ComponentProps<'ul'>;
type SlidingPanelProps = React.ComponentProps<'div'>;

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
        <Sliding isShow>{children}</Sliding>
      </SlidingPanelContextProvider>
    </div>
  );
};

const ListBox = (props: ListBoxProps) => {
  return <ul {...props} {...stylex.props(styles['listBox'])} />;
};

export const Flights = {
  Container,
  GlobeMapBox,
  SlidingPanelBox,
  ListBox,
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
  },
  slidingPanelBox: {
    position: 'relative',
  },
});

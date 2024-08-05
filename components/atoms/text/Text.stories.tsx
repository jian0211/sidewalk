import { Children } from 'react';
import { Text } from './Text';
import { Meta, StoryObj } from '@storybook/react';
import { fontSizing } from '../../../styles/globalTokens.stylex';

type StoryProps = React.ComponentType<typeof Text>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: Text,
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'test',
    colorProps: {
      color: 'baseGray',
    },
  },
  render: (arg) => (
    <Text
      {...arg}
      colorProps={{
        color: 'baseGray',
      }}
    />
  ),
};

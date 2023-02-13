// Packages
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import { Avatar } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Avatar',
  component: Avatar,
  args: {
    label: 'Pedro',
    color: 'primary',
    size: 'md',
  },
} as Meta;

export const Basic: Story = args => (
  <>
    <GlobalStyled />
    <Avatar {...args} id="avatar" />
  </>
);

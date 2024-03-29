// Packages
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import { CircularButton } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Button/CircularButton',
  component: CircularButton,
  args: {
    name: 'test',
    icon: 'add',
  },
} as Meta;

export const Basic: Story = args => (
  <>
    <GlobalStyled />
    <CircularButton name={args.name} icon={args.icon} />
  </>
);

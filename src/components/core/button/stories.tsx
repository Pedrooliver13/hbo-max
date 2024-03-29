// Packages
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import { Button } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

// Icons
import { Add } from '@styled-icons/fluentui-system-filled/Add';

export default {
  title: 'Core/Button',
  component: Button,
  args: {
    label: 'Button',
    color: true,
    href: '#',
    startIcon: false,
    endIcon: false,
    disabled: false,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    startIcon: {
      control: {
        type: 'boolean',
      },
    },
    endIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Basic: Story = args => (
  <>
    <GlobalStyled />
    <Button
      {...args}
      name="args.label"
      startIcon={args.startIcon ? <Add /> : null}
      endIcon={args.endIcon ? <Add /> : null}
    >
      {args.label}
    </Button>
  </>
);

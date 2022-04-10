import { Story, Meta } from '@storybook/react/types-6-0';

import { Link } from '.';
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Link',
  component: Link,
  args: {
    name: 'test',
    label: 'Link',
    isActive: true
  }
} as Meta;

export const Basic: Story = (args) => (
  <>
    <GlobalStyled />
    <Link {...args} name={args.name}>
      {args.label}
    </Link>
  </>
);

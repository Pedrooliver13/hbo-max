// Packages
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import { ButtonBrand } from 'components/core';

// Styles
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Button/ButtonBrand',
  component: ButtonBrand,
  args: {
    name: 'test',
    logo: 'cartoon',
  },
} as Meta;

export const Basic: Story = args => (
  <>
    <GlobalStyled />
    <ButtonBrand {...args} name={args.name} brand={args.logo} />
  </>
);

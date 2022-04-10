import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonBrand } from '.';
import CartoonLogo from 'assets/cartoon.svg';
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Button/ButtonBrand',
  component: ButtonBrand,
  args: {
    name: 'test',
    logo: CartoonLogo
  }
} as Meta;

export const Basic: Story = (args) => (
  <>
    <GlobalStyled />
    <ButtonBrand {...args} name={args.name}>
      <img src={args.logo} alt="teste" />
    </ButtonBrand>
  </>
);

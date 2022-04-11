import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from '.';
import GlobalStyled from 'styles/global';

export default {
  title: 'Core/Cards',
  component: Card,
  args: {
    name: 'Card',
    image:
      'https://images.moviesanywhere.com/a4d68b895ddea9e52e345e2f0c6838ab/423fc271-7a33-4155-92db-3c926d8c1af3.jpg',
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
} as Meta;

export const Basic: Story = (args) => (
  <>
    <GlobalStyled />
    <Card {...args} name={args.name} image={args.image} href={args.href} />
  </>
);

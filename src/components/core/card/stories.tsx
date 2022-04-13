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
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: 'Card',
    size: 'md',
    type: 'series'
  },
  argTypes: {
    image: {
      control: {
        type: 'select',
        options: [
          'https://images.moviesanywhere.com/a4d68b895ddea9e52e345e2f0c6838ab/423fc271-7a33-4155-92db-3c926d8c1af3.jpg',
          'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2020/08/friends-curiosidades-sobre-uma-das-maiores-series-de-todos-os-tempos-1024x576.jpg'
        ]
      }
    }
  }
} as Meta;

export const Basic: Story = (args) => (
  <>
    <GlobalStyled />
    <Card {...args} name={args.name} image={args.image} href={args.href} />
  </>
);

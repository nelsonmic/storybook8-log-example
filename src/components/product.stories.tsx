
import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './product';


const meta: Meta = {
  title: 'app/Product',
  component: Product,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
      args: {
            id: '1',
            title: 'Sample Product',
            price: '$10.00',
            description: 'This is a sample product description.',
          },
};
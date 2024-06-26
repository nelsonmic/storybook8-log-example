
import type { Meta, StoryObj } from '@storybook/react';
import { Products } from './products';
import { createProduct, generateProducts } from '@/lib/mock';



const meta: Meta = {
  title: 'app/Products',
  component: Products,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
      args: {
            products: generateProducts(8).map(() => createProduct())
          },
};
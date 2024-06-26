
import type { Meta, StoryObj } from '@storybook/react';
import Home from './page';
import { createProduct, generateProducts, reset } from '@/lib/mock';
import ErrorPage from './error';


const Wrapper = ({ productCount }: { productCount: number }) => (
      <Home />
    )


const meta: Meta = {
  title: 'app/HomePage',
  component: Wrapper,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
      args: {
            productCount: 30
          },
          loaders: [
            ({ args: { productCount } }) => {
              reset()
              generateProducts(productCount).map(() => createProduct())
            }
          ]
};

export const Error = {
      render: () => <ErrorPage />
};

export const Empty: Story = {
      loaders: [
        () => {
          reset()
        }
      ],
    }

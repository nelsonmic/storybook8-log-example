import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import "../src/app/globals.css"
import { http, HttpResponse } from 'msw'
import { getProducts } from "../src/lib/mock"

initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://fakestoreapi.com/products', () => {
          const products = getProducts();
          return HttpResponse.json(products);
        })
      ]
    },
  },
  loaders: [mswLoader]
};

export default preview;




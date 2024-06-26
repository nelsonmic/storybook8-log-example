import { faker } from '@faker-js/faker';
import { drop, factory, primaryKey } from '@mswjs/data';

let _id = 1;
const db = factory({
  product: {
    id: primaryKey(() => _id++),
    title: faker.commerce.productName,
    price: () => faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }),
    description: faker.commerce.productDescription
  }
});

export const reset = () => drop(db);

export const generateProducts = (count: number): number[] => {
      return Array.from({ length: count }, (_, i) => i);
    };

export const createProduct = (product = {}) => db.product.create(product);

export const getProducts = () => {
      const products = db.product.getAll();
      return products;
};
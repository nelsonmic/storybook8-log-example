import { FC } from 'react';

export interface ProductProps {
  id: string;
  title: string;
  price: string;
  description: string;
}

export const Product: FC<ProductProps> = ({
  id,
  title,
  price,
  description,
}) => {
  return (
    <div className='border min-w-[200px] max-w-[200px] p-4 rounded-lg flex flex-col gap-2'>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
    </div>
  );
};

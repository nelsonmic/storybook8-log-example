import { FC } from "react"
import { Product, ProductProps } from "./product"

export const Products:FC<{products: Array<ProductProps>}> = ({ products }) => {
      return (
            <div className="flex gap-2 flex-wrap">
                  {
                        products.length > 0 ? (
                              products.map((item, index) => (
                                    <Product key={item.title + index} {...item} />
                              ))
                        ): (
                              <p>Oops! Looks like we&apos;re all out of stock</p>
                        )
                  }
            </div>
      )
}
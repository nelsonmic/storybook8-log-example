import { cache } from 'react'

const fetchData = cache(async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products",
    {
      next: {
        revalidate: 10
      }
    }
  )
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  const products = await res.json()
  return products
});

export default fetchData;

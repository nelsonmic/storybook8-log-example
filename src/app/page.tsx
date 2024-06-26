import { Products } from "@/components/products";
import fetchData from "@/lib/fetch-data";

export default async function Home () {
  const products = await fetchData()
  return (
    <main className="flex flex-col gap-6 min-h-screen p-8">
      <Products products={products} />
    </main>
  );
}

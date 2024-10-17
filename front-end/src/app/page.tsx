"use client";
import { Hero } from "@/components/home/hero";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { ProductsContext } from "@/context/products-context";
import { useContext } from "react";

export interface IProduct {
  id: string | number;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
}

export default function Home() {
  const { productsData, searchValue } = useContext(ProductsContext);

  const findPost = productsData?.filter((cards) =>
    cards?.name?.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("findPost", findPost);
  return (
    <main>
      <Hero />
      <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {findPost.map((product, index) =>
          index === 6 || index === 7 ? (
            <FeaturedProductCard
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              discount={product.discount}
            />
          ) : (
            <ProductCard
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              images={product.images}
              discount={product.discount}
            />
          )
        )}
      </section>
    </main>
  );
}

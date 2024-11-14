"use client";

import React, { useContext } from "react";

import { ProductsContext } from "@/context/products-context";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { CheckboxDemo } from "@/components/checkbox";

const CategoryPage = () => {
  const { productsData } = useContext(ProductsContext);
  return (
    <section>
      <main className="flex  justify-center gap-20 mx-auto my-20 w-screen">
        <CheckboxDemo />
        <section className="grid grid-cols-3 gap-y-12 grid-rows-5 gap-x-6">
          {productsData.map((product) => (
            <Link href={`/${product._id ?? 1}`} key={product._id}>
              <div className="relative w-[244px]">
                <Image
                  src={product.images[0]}
                  alt="image1"
                  width={244}
                  height={331}
                  className="rounded-xl"
                />
                <Heart
                  size={22}
                  strokeWidth={1}
                  className="absolute top-4 right-4"
                />
                <div className="mt-2">
                  <h3 className="font-normal">{product.name}</h3>
                  <h4 className="font-bold">
                    {product.price.toLocaleString()}₮
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </section>
  );
};

export default CategoryPage;

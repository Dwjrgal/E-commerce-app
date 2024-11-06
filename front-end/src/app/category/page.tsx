"use client";

import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { apiUrl } from "@/lib/util";
import { ProductsContext } from "@/context/products-context";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Category } from "@/lib/types";

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

export const CheckboxDemo = () => {
  const [categories, setCategories] = useState<Category | []>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCategories(res.data.category);
      console.log("categories data", res);
    } catch (error) {
      console.error("failed to get categories data", categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log("categories:", categories);
  return (
    <div className="flex flex-col items-start space-x-2 gap-3">
      <h4 className="font-bold">Ангилал</h4>
      {Array.isArray(categories) &&
        categories.map(({ name }: Category) => (
          <div className="flex gap-2" key={name}>
            <Checkbox id={`category-${name}`} className="rounded" />
            <label
              htmlFor={`category-${name}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {name}
            </label>
          </div>
        ))}
    </div>
  );
};
export default CategoryPage;

"use client";

import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { apiUrl } from "@/lib/util";
import { ProductsContext } from "@/context/products-context";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
}

const CategoryPage = () => {
  const { productsData } = useContext(ProductsContext);
  const { id } = useParams();
  return (
    <section>
      <main className="flex  justify-center gap-20 mx-auto my-20 w-screen">
        <CheckboxDemo />
        <section className="grid grid-cols-3 gap-y-12 grid-rows-5 gap-x-6">
          {productsData.map((product) => (
            <Link href={`/${product._id ?? 1}`}>
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
interface ICategory {
  category: {};
  name: string;
}

export const CheckboxDemo = () => {
  const { productsData } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [productsCat, setProductsCat] = useState([]);

  const productsCategory = productsData.map((cards: any) => cards.category);

  // const findProductCat = () => {
  //   if(productsCategory._id === categories._id){
  //   }
  // }

  const getCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCategories(res.data.category);
      console.log("categories data", res);
    } catch (error) {
      console.error("failed to get categories data", categories);
    }
  };

  const checking = () => {
    setIsChecked(true);
    return console.log("clicked");
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log("products category", productsCategory);
  console.log("categories:", categories);
  return (
    <div className="flex flex-col items-start space-x-2 gap-3">
      <h4 className="font-bold">Ангилал</h4>
      {categories.map(({ name }: ICategory) => (
        <div className="flex gap-2">
          <Checkbox id="terms" className="rounded" onChange={checking} />
          <label
            htmlFor="terms"
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

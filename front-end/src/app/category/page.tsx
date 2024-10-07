import { ProductCard } from "@/components/product-card";
import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { apiUrl } from "@/lib/util";
import { ProductsContext } from "@/context/products-context";
import Image from "next/image";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";

const CategoryPage = () => {
  // const [products, setProducts] = useState();
  // const getProducts = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/products`);
  //     setProducts(res.data.products);
  //   } catch (error) {
  //     console.error("Failed to get all products", error);
  //     toast.error("Failed to fetch products data");
  //   }
  // };
  // console.log("products", products);
  return (
    <section className="flex justify-center gap-20">
      <main className="flex justify-between mx-80 my-20 min-w-max-[600px] gap-60">
        <CheckboxDemo />
        <section className="grid grid-cols-3 gap-y-12 grid-rows-5 gap-x-6">
          {/* {products.map((product) => {
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
                <h4 className="font-bold">{product.price}₮</h4>
              </div>
            </div>;
          })} */}
        </section>
      </main>
    </section>
  );
};
interface ICategory {
  category: {};
  name: string;
}
const getCategories = async () => {
  try {
    const res = await axios.get(`${apiUrl}/categories`);
    const { category } = res.data;
    return category;
  } catch (error) {
    console.log(error);
  }
};

export const CheckboxDemo = async () => {
  // const [categories, setCategories] = useState();
  // const getCategories = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/categories`);
  //     setCategories(res.data.categoru);
  //     console.log("categories data", res);
  //   } catch (error) {
  //     console.error("failed to get categories data", categories);
  //   }
  // };
  // useEffect(() => {
  //   getCategories();
  // }, []);
  const categories = await getCategories();
  console.log("category nmae", categories);
  return (
    <div className="flex flex-col items-start space-x-2 gap-3">
      <h4 className="font-bold">Ангилал</h4>

      {categories.map(({ name }: ICategory) => (
        <div className="flex gap-2">
          <Checkbox id="terms" className="rounded" />
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

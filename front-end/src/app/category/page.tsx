import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

const CategoryPage = () => {
  return (
    <section className="flex justify-center gap-20">
      <main className="flex justify-between mx-80 my-20 min-w-max-[600px] gap-60">
        <CheckboxDemo />
        <section className="grid grid-cols-3 gap-y-12 grid-rows-5 gap-x-6">
          {products.map((product) => {
            return (
              <>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  discount={product.discount}
                />
              </>
            );
          })}
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
    const res = await axios.get("http://localhost:8000/api/v1/categories");
    const { category } = res.data;
    return category;
  } catch (error) {
    console.log(error);
  }
};

export const CheckboxDemo = async () => {
  const categories = await getCategories();
  console.log(categories);
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

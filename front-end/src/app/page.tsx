"use client";
import { Hero } from "@/components/home/hero";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { ProductsContext } from "@/context/products-context";
import { UserContext } from "@/context/user-context";
import { products } from "@/lib/data";
import axios from "axios";
import { Link } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IProduct {
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
  const { productsData } = useContext(ProductsContext);
  // const { searchValue } = useContext(UserContext);
  // const [searchProduct, setSearchProduct] = useState([]);

  // const hanldeChange = (text: any) => {
  //   const findProduct = productsData.filter((productName) =>
  //     productsData.productName
  //       .toLowerCase()
  //       .includes(text.target.value.toLowerCase())
  //   );
  //   setSearchProduct(findProduct);
  // };

  // const findPost = productsData?.filter((product) =>
  //   product?.name?.toLowerCase().includes(searchValue.toLowerCase())
  // );
  console.log("products", productsData);
  return (
    <main>
      <Hero />
      <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {productsData.map((product, index) =>
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

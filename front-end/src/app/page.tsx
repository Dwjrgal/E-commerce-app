"use client";
import { Hero } from "@/components/home/hero";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import axios from "axios";
import { Link } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ProductsType {
  name: string;
  price: number;
  image: string;
  discount: number;
}

export default function Home() {
  const { _id } = useParams();
  const [productsData, setProductsData] = useState<ProductsType[]>([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/products");
      setProductsData(res.data.products);
    } catch (error) {
      console.error("Failed to get all products", error);
      toast.error("Failed to fetch products data");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log("DATA", productsData);

  return (
    <main>
      <Hero />
      <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {productsData.map((product, index) =>
          index === 6 || index === 7 ? (
            <FeaturedProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
            />
          ) : (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
            />
          )
        )}
      </section>
    </main>
  );
}

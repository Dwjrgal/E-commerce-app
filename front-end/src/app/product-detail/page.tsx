"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Review from "@/components/review";
import { useParams } from "next/navigation";
import axios from "axios";
interface IProduct {
  name: string;
  image: [string];
  price: number;
}

const ProductDetail = () => {
  const sideImages = products.slice(1, 5);
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState<IProduct>({});
  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/${id}`);
      setOneProduct(res.data.product);
    } catch (error) {
      console.error(error);
    }
    ``;
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log("oneproduct", oneProduct);
  return (
    <>
      <main className="flex mx-auto max-w-[1000px] my-20 gap-5">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-2">
            {sideImages.map((i) => (
              <img src={i.image} className="w-14 h-14 rounded" />
            ))}
          </div>
          <img
            src="../products/image2.png"
            className="border w-80 h-96 rounded-xl"
          />{" "}
        </div>
        <section className="flex flex-col gap-5 my-20">
          <div className="flex flex-col gap-3">
            <button className="w-16 h-5 border rounded-full border-blue-500 text-xs">
              Шинэ
            </button>
            <h2 className="font-bold text-xl">{oneProduct.name}</h2>
            <p className="font-light text-sm">
              Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
            </p>
            <p className=" text-sm">Хэмжээний заавар</p>
            <ul className="flex gap-2">
              <li className="w-8 h-8 rounded-full border text-center bg-black text-white">
                S
              </li>
              <li className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                M
              </li>
              <li className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                L
              </li>
              <li className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                XL
              </li>
            </ul>
            <div className="flex item-center gap-2 mt-3">
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center ">
                -{" "}
              </button>
              <p className="mt-1">1</p>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center ">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{oneProduct.price}₮</h4>
            <button className="w-40 h-8 rounded-full text-white text-sm font-medium bg-blue-700">
              Сагсанд нэмэх
            </button>
          </div>
        </section>
      </main>
      <p className="font-bold text-2xl ml-[530px]">Холбоотой бараа</p>
      <RelativeCards />
    </>
  );
};

export default ProductDetail;

export const RelativeCards = () => {
  const relativeCards = products.slice(1, 9);
  return (
    <>
      <section className="mt-5 mb-24 max-w-[1000px] mx-auto grid grid-cols-4 gap-y-12 gap-x-6">
        {relativeCards.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            discount={product.discount}
          />
        ))}{" "}
      </section>
    </>
  );
};

"use client";
import React, { useContext, useEffect, useState } from "react";
import { products } from "@/lib/data";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { ProductsContext } from "@/context/products-context";
import { apiUrl } from "@/lib/util";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import Review from "@/components/review";
import { UserContext } from "@/context/user-context";

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
interface ICart {
  userId: any;
  products: [{ productId: any; quantity: number }];
}
const ProductDetail = () => {
  const { user } = useContext(UserContext);
  const sideImages = products.slice(1, 5);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [oneProduct, setOneProduct] = useState<IProduct>({} as IProduct);
  const router = useRouter();

  const getProduct = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/${id}`);
      setOneProduct(res.data.product);
    } catch (error) {
      console.error(error);
      toast.error("failed to get product");
    }
  };
  const descBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    return count;
  };

  const handleAddCart = async () => {
    try {
      const res = await axios.post(`${apiUrl}/carts`, {
        userId: user?._id,
        productId: id,
        quantity: count,
      });
      console.log("addCartRes", res);
      if (res.status === 200) {
        console.log("success");
        toast.success("created cart successfully");
        // router.push("/buy-steps/cart");
      }
    } catch (error) {
      console.log("failed to add cart", error);
      toast.error("Falied to add cart");
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log("oneproduct", oneProduct);
  return (
    <>
      <main className="flex mx-auto max-w-[1000px] my-20 gap-5">
        <div className="flex gap-3 mt-20">
          <div className="flex flex-col gap-2 mt-20">
            {sideImages.map((i) => (
              <img src={i.image} className="w-16 h-16 rounded" />
            ))}
          </div>
          <img
            src="../products/image1.png"
            className="border w-96 h-[490px] rounded-xl"
          />{" "}
        </div>
        <section className="flex flex-col gap-5 my-40">
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
              <button
                className="w-8 h-8 rounded-full border-[1px] border-black text-center"
                onClick={descBtn}
              >
                -{" "}
              </button>
              <p className="mt-1">{count}</p>
              <button
                className="w-8 h-8 rounded-full border-[1px] border-black text-center"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{oneProduct.price}₮</h4>
            <button
              onClick={handleAddCart}
              className="w-40 h-8  mb-5 rounded-full text-white text-sm font-medium bg-blue-700"
            >
              Сагсанд нэмэх
            </button>
          </div>
          <Review />
        </section>
      </main>
      <p className="font-bold text-2xl ml-[530px]">Холбоотой бараа</p>
      <RelativeCards />
    </>
  );
};

export default ProductDetail;

export const RelativeCards = () => {
  const { id } = useParams();
  const { productsData } = useContext(ProductsContext);
  const relativeCards = productsData.slice(1, 9);
  console.log("relativeCards", relativeCards);

  return (
    <>
      <section className="mt-5 mb-24 max-w-[1000px] mx-auto grid grid-cols-4 gap-y-12 gap-x-6">
        {relativeCards.map((product) => (
          <Link href={`/${id}`}>
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
            </div>
          </Link>
        ))}{" "}
      </section>
    </>
  );
};

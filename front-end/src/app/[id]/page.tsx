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
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FaHeart } from "react-icons/fa";

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
  const [productQuantity, setProductQuanitity] = useState(1);
  const [oneProduct, setOneProduct] = useState<IProduct>({} as IProduct);
  const router = useRouter();
  const { handleAddList } = useContext(ProductsContext);
  const [activeSize, setActiveSize] = useState(false);

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
    if (productQuantity > 1) {
      setProductQuanitity(productQuantity - 1);
    }
    return productQuantity;
  };

  const handleAddCart = async () => {
    try {
      const res = await axios.post(`${apiUrl}/carts`, {
        userId: user?._id,
        productId: id,
        quantity: productQuantity,
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
          <div className="relative w-96">
            <img
              src="../products/image1.png"
              className="border w-96 h-[490px] rounded-xl"
            />
            <Heart
              size={28}
              strokeWidth={1}
              fill="red"
              className="absolute top-5 right-5"
              onClick={handleAddList}
            />
          </div>
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
            <p className="text-sm  underline decoration-solid">
              Хэмжээний заавар
            </p>
            <ul className="flex gap-2">
              <button className={`w-8 h-8 rounded-full border text-center
               ${activeSize === true 
                ?"bg-black text-white"
                :"bg-slate-50 text-black"
              }`} onClick={() => setActiveSize(true)}>
                S
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center hover:bg-black hover:text-white">
                M
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center hover:bg-black hover:text-white">
                L
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center hover:bg-black hover:text-white">
                XL
              </button>
            </ul>
            <div className="flex item-center gap-2 mt-3">
              <button
                className="w-8 h-8 rounded-full border-[1px] border-black text-center"
                onClick={descBtn}
              >
                -{" "}
              </button>
              <p className="mt-1">{productQuantity}</p>
              <button
                className="w-8 h-8 rounded-full border-[1px] border-black text-center"
                onClick={() => setProductQuanitity(productQuantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{oneProduct.price?.toLocaleString()}₮</h4>
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
                <h4 className="font-bold">{product.price.toLocaleString()}₮</h4>
              </div>
            </div>
          </Link>
        ))}{" "}
      </section>
    </>
  );
};

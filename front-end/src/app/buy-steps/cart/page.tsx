"use client";
import { UserContext } from "@/context/user-context";
import { products } from "@/lib/data";
import { apiUrl } from "@/lib/util";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";

interface CartType {
  userId: any;
  products: [{ productId: any; quantity: number }];
  totalAmount: number;
}
const Cart = () => {
  const { user } = useContext(UserContext);
  const ordered = products.slice(1, 4);
  const [count, setCount] = useState(1);
  const [cartData, setCartData] = useState<CartType>({} as CartType);

  const getCart = async () => {
    try {
      const res = await axios.get(`${apiUrl}/carts`, { userId: user?._id });
      setCartData(res.data);
      console.log("setcart", res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const descBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    return count;
  };

  useEffect(() => {
    getCart();
  }, []);
  console.log("cart data", cartData);
  return (
    <section className="bg-slate-100 flex justify-center items-center h-svh">
      <div className=" w-[500px] border rounded-xl my-10 bg-white">
        <h3 className="font-semibold my-5 ml-10">1.Сагс (4)</h3>
        <div className="flex flex-col  justify-center gap-5">
          {ordered.map((r) => (
            <div className="flex justify-between mx-10 border rounded-xl px-5 py-4">
              <div className="flex gap-2">
                <img src={r.image} className="w-[60px] h-[60px] rounded " />{" "}
                <ul className="font-normal text-[13px]">
                  <li>{r.name}</li>
                  <div className="flex item-center gap-2 mt-3">
                    <button
                      className="w-6 h-6 rounded-full border-[1px] border-black text-center"
                      onClick={descBtn}
                    >
                      -{" "}
                    </button>
                    <p className="mt-1">{count}</p>
                    <button
                      className="w-6 h-6 rounded-full border-[1px] border-black text-center"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </ul>
              </div>{" "}
              <GoTrash className="my-auto" />
            </div>
          ))}
          <div className="flex justify-between border-t-[1px] border-dashed px-10 pt-8">
            <h3>Нийт төлөх дүн:</h3>
            <div className="flex flex-col items-end">
              <h2 className="font-bold">360,000₮</h2>
              <Link href="./address">
                <button className="w-40 h-8 border bg-blue-600 rounded-full text-white mt-8 mb-5">
                  Худалдан авах
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

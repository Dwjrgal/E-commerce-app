"use client";
import { products } from "@/lib/data";
import { apiUrl } from "@/lib/util";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { GoTrash } from "react-icons/go";

const Cart = () => {
  const { userId } = useParams();
  const ordered = products.slice(1, 4);
  const [cart, setCart] = useState([]);
  const getCart = async () => {
    try {
      const res = await axios.get(`${apiUrl}/carts/${userId}`);
      setCart(res.data);
      console.log("setcart", cart);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("userId", userId)
  console.log("cart data", cart);
  return (
    <section className="bg-slate-100 flex justify-center items-center h-[900px]">
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
                    <button className="w-6 h-6 rounded-full border-[1px] border-black text-center ">
                      -{" "}
                    </button>
                    <p>1</p>
                    <button className="w-6 h-6 rounded-full border-[1px] border-black text-center ">
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
              <button className="w-40 h-8 border bg-blue-600 rounded-full text-white mt-8 mb-5">
                Худалдан авах
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

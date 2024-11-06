"use client";
import { Card, CardContent } from "@/components/ui/card";
import { UserContext } from "@/context/user-context";
import { apiUrl } from "@/lib/util";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";

interface ICart {
  userId: string;
  products: {
    product: {
      _id: string;
      images: string[];
      name: string;
      price: number;
    };
    quantity: number;
  }[];
}

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cartData, setCartData] = useState<ICart>();

  const getCart = useCallback(async () => {
    try {
      if (!user) return;
      const res = await axios.get(`${apiUrl}/carts/${user?._id}`);
      setCartData(res.data.data);
      console.log("setcart", res.data.data);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  const updateQuantity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart: ICart | undefined) => {
      if (!prevCart) return prevCart;
      return {
        ...prevCart,
        products: prevCart.products.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: newQuantity }
            : item
        ),
      };
    });
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${apiUrl}/carts/update-cart`,
        {
          productId,
          newQuantity,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        toast.success("Successfully updated");
      }
    } catch (error) {
      console.error("Error fetching data", error);
      toast.error("Failed to update cart");
    }
  };
  const deleteCard = async (productId: string) => {
    try {
      const userToken = localStorage.getItem("token");
      const res = await axios.delete(
        `${apiUrl}/carts/delete-cart/${productId}`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      if (res.status === 200) {
        await getCart();
        toast.success("Successfully deleted cart");
      }
    } catch (error) {
      console.error("Error to delete card:", error);
      toast.error("Failed to delete product card");
    }
  };
  const handleClick = (id: string) => {
    deleteCard(id);
    console.log("product id", id);
  };
  useEffect(() => {
    getCart();
  }, [getCart, user]);
  console.log("cart data", cartData);
  return (
    <section className="bg-slate-100 flex justify-center py-20 h-screen">
      <div className="w-[500px] h-fit border rounded-xl my-10 bg-white">
        <h3 className="font-semibold my-5 ml-10">1.Сагс (4)</h3>
        <div className="flex flex-col  justify-center gap-5">
          {cartData?.products?.map((product: any) => (
            <Card
              className="flex justify-between mx-10 border rounded-xl py-3 px-4"
              key={product.product._id}
            >
              <CardContent className="flex gap-2">
                <Image
                  alt="card image"
                  width={86}
                  height={86}
                  src={product?.product?.images[0]}
                  className="w-[86px] h-[86px] rounded"
                />
                <ul className="font-normal text-[13px] flex flex-col">
                  <li className="text-md">{product?.product?.name}</li>
                  <div className="flex item-center gap-2 mt-1">
                    <button
                      className="w-6 h-6 rounded-full border-[1px] border-black text-center"
                      onClick={() =>
                        updateQuantity(
                          product.product._id,
                          Math.max(0, product?.quantity - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <p className="mt-1">{product?.quantity}</p>
                    <button
                      className="w-6 h-6 rounded-full border-[1px] border-black text-center"
                      onClick={() =>
                        updateQuantity(
                          product.product._id,
                          product.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <li className="mt-1 font-bold">
                    {product?.product?.price.toLocaleString()}₮
                  </li>
                </ul>
              </CardContent>
              <button onClick={() => handleClick(product.product._id)}>
                <GoTrash className="my-auto" />
              </button>
            </Card>
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

"use client";
import { Card, CardContent } from "@/components/ui/card";
import { UserContext } from "@/context/user-context";
import { apiUrl } from "@/lib/util";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { VscHeartFilled } from "react-icons/vsc";
import { toast } from "react-toastify";

const Save = () => {
  const [listData, setListData] = useState([]);
  const { user } = useContext(UserContext);
  const [productQuantity, setProductQuanitity] = useState(1);
  const { id } = useParams();
  const [countCards, setCountCards] = useState<number>();

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

  const getList = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/wishlist`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      console.log("res data", res.data);
      if (res.status === 200) {
        setListData(res.data);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      toast.error("Failed to get wishlist");
    }
  };
  useEffect(() => {
    getList();
  }, []);

  console.log("wishList data", listData);
  return (
    <>
      <main className="w-screen h-screen bg-slate-100 flex flex-col items-center gap-4 pt-40">
        <h3 className="relative bottom-2 right-[170px] font-bold text-xl">
          Хадгалсан бараа <span className="text-gray-600 font-normal">(3)</span>
        </h3>
        <div className="flex flex-col gap-2">
          {listData?.products?.map((cards: any) => (
            <Card className="flex justify-between mx-10 border rounded-xl px-5 py-4 bg-white w-[540px]">
              <CardContent className="flex gap-2">
                <img
                  src={cards?.product.images[0]}
                  className="w-[80px] h-[80px] rounded-xl border"
                />{" "}
                <ul className="flex flex-col gap-[2px]">
                  <li className="font-normal text-gray-800">
                    {cards?.product.name}
                  </li>
                  <li className="font-bold text-[13px]">
                    {cards?.product?.price.toLocaleString()}₮
                  </li>
                  <button
                    className="w-[70px] h-6 bg-blue-700 text-white border rounded-full text-center text-[13px]"
                    onClick={handleAddCart}
                  >
                    Сагслах
                  </button>
                </ul>
              </CardContent>
              <VscHeartFilled className="mt-2 text-xl" />
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default Save;

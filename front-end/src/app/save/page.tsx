"use client";
import { Card, CardContent } from "@/components/ui/card";
import { UserContext } from "@/context/user-context";
import { apiUrl } from "@/lib/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { VscHeartFilled } from "react-icons/vsc";
import { toast } from "react-toastify";

const Save = () => {
  const [listData, setListData] = useState([]);

  const getList = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}/wishlist`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      console.log("res data", res.data);
      if (res.status === 201) {
        setListData(res.data.wishList);
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
        <h3 className="relative bottom-10 right-[170px] font-bold text-xl">
          Хадгалсан бараа <span className="text-gray-600 font-normal">(3)</span>
        </h3>
        <Card className="flex justify-between mx-10 border rounded-xl px-5 py-4 bg-white w-[540px] h-[120px] absolute">
          <CardContent className="flex gap-2">
            <img
              src="../products/image2.png"
              className="w-[80px] h-[80px] rounded-xl border"
            />{" "}
            <ul className="flex flex-col gap-[2px]">
              <li className="font-normal text-gray-800">Chunky Gylph Tee</li>
              <li className="font-bold text-[13px]">120’000₮</li>
              <button className="w-[70px] h-6 bg-blue-700 text-white border rounded-full text-center text-[13px]">
                Сагслах
              </button>
            </ul>
          </CardContent>{" "}
          <VscHeartFilled className="mt-2 text-xl" />
        </Card>
      </main>
    </>
  );
};

export default Save;

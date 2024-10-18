"use client";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const OrderHistory = () => {
  const ordered = products.slice(1, 5);
  console.log("ordered", ordered);
  return (
    <section className="flex justify-center h-screen pt-40 gap-20 px-60 bg-slate-50 w-screen">
      <div className="flex flex-col gap-2 font-medium text-md">
        <Link href="../user-form">
          <button className="rounded-full w-60 h-10 text-start pl-4">
            Хэрэглэгчийн хэсэг
          </button>{" "}
        </Link>
        <Link href="./order-history">
          <p className="text-md pt-1 text-gray-700 pl-4 bg-white rounded-full w-60 h-10">
            Захиалгын түүх
          </p>{" "}
        </Link>
      </div>{" "}
      <section className="flex flex-col gap-4">
        <section className="flex flex-col gap-6">
          <h3 className="font-bold text-xl">Захиалгын түүх</h3>
          <div className="flex flex-col gap-5 w-[600px] bg-white rounded-xl py-10">
            <div className="flex items-center gap-5 ml-10">
              <h2 className="font-semibold">2024-09-03 15:34</h2>{" "}
              <button className="w-40 h-6 border bg-blue-600 rounded-full text-white text-xs font-semibold">
                хүргэлтэнд гарсан
              </button>{" "}
            </div>
            <div className="flex flex-col gap-5">
              {ordered.map((r, idx) => (
                <div key={idx} className="flex justify-between mx-10">
                  <div className="flex gap-2">
                    <Image
                      src={r.image}
                      className="w-[50px] h-[50px] rounded "
                      width={50}
                      height={50}
                    />{" "}
                    <ul className="font-light text-[13x]">
                      <li>{r.name}</li>
                      <li>1x {r.price}₮</li>
                    </ul>
                  </div>{" "}
                  <h2 className="font-bold">{r.price}₮</h2>
                </div>
              ))}
              <div className="flex justify-between border-t-[1px] border-dashed px-10 pt-8">
                <h3>Үнийн дүн:</h3>
                <h2 className="font-bold">480,000₮</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[600px] h-32 rounded-xl bg-white py-8 px-8">
          <div className="flex gap-5 mb-5">
            <h2 className="font-semibold">2024-09-03 15:34</h2>{" "}
            <button className="w-24 h-6 border text-blue-600 rounded-full  text-xs font-semibold  bg-slate-200">
              дууссан
            </button>{" "}
          </div>
          <ul className="flex justify-between">
            <li>Үнийн дүн:</li>
            <li className="font-bold">120,000₮</li>
          </ul>
        </div>
      </section>
    </section>
  );
};
export default OrderHistory;

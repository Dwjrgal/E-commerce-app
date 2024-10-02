"use client";
import { products } from "@/lib/data";

const OrderHistory = () => {
  const ordered = products.slice(1, 5);
  console.log("ordered", ordered);
  return (
    <section className="flex justify-center h-[900px] pt-40 gap-20 px-60 bg-slate-50">
      <div className="flex flex-col gap-2 font-medium text-md">
        <button className=" bg-white rounded-full w-60 h-10 text-start pl-4">
          Хэрэглэгчийн хэсэг
        </button>
        <p className="text-md text-gray-700 pl-4">Захиалгын түүх</p>
      </div>{" "}
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
            {ordered.map((r) => (
              <div className="flex justify-between mx-10">
                <div className="flex gap-2">
                  <img src={r.image} className="w-[50px] h-[50px] rounded " />{" "}
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
    </section>
  );
};
export default OrderHistory;

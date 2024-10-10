import Link from "next/link";
import React from "react";

const Address = () => {
  return (
    <>
      <main className="flex gap-6 h-screen justify-center pt-40 bg-slate-100">
        <section className="bg-white border rounded-xl w-72 h-72 pt-3 px-4">
          <h4 className="font-semibold">
            Сагс <span className="text-gray-400 text-thin">(4)</span>
          </h4>
          <div className="flex gap-3 mt-2">
            <img
              src="../products/image2.png"
              className="border w-12 h-12 rounded-xl"
            />
            <ul>
              <li className="text-sm">Chunky Glyph Tee</li>
              <li className="text-[10px]">1 x 120’000₮</li>
              <li className="text-md font-medium">120’000₮</li>
            </ul>
          </div>
          <div className="flex gap-3 mt-2">
            <img
              src="../products/image2.png"
              className="border w-12 h-12 rounded-xl"
            />
            <ul>
              <li className="text-sm">Chunky Glyph Tee</li>
              <li className="text-[10px]">1 x 120’000₮</li>
              <li className="text-md font-medium">120’000₮</li>
            </ul>
          </div>
          <div className="border-t-[1px] border-dashed mt-6  pr-3 flex justify-between pt-4">
            <p className="text-sm">Нийт төлөх дүн:</p>
            <h4 className="text-sm font-bold">120’000₮</h4>
          </div>
        </section>
        <AddressInfo />
      </main>
    </>
  );
};

export default Address;

export const AddressInfo = () => {
  return (
    <section className="bg-white border rounded-xl h-[550px] py-6 px-6">
      <h3 className="text-md font-semibold mb-6">
        2.Хүргэлтийн мэдээлэл оруулах
      </h3>
      <main className="flex flex-col gap-4 font-semibold text-xs">
        <div>
          {" "}
          <p>Овог:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Нэр:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Утасны дугаар:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Хаяг:</p>
          <input
            type="text"
            className="h-20 w-[600px] border rounded-xl pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Нэмэлт мэдээлэл</p>
          <input
            type="text"
            className="h-12 w-[600px] border rounded-xl pl-2 text-xs mt-2"
            name="lastname"
          />
          <p className="text-xs text-gray-500 font-normal">
            Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
          </p>
        </div>
        <div className="flex justify-between">
          <Link href="./cart">
            <button className="w-20 h-6 border rounded-xl">Буцах</button>
          </Link>
          <Link href="./pay">
            <button className="w-32 h-6 border rounded-xl bg-blue-700 text-white">
              Төлбөр төлөх
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};

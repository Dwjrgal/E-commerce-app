import { AddressInfo } from "@/components/adress-info";
import Image from "next/image";
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
            <Image
              src="../products/image2.png"
              alt="card image"
              width={12}
              height={12}
              className="border w-12 h-12 rounded-xl"
            />
            <ul>
              <li className="text-sm">Chunky Glyph Tee</li>
              <li className="text-[10px]">1 x 120’000₮</li>
              <li className="text-md font-medium">120’000₮</li>
            </ul>
          </div>
          <div className="flex gap-3 mt-2">
            <Image
              src="../products/image2.png"
              alt="image"
              width={12}
              height={12}
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

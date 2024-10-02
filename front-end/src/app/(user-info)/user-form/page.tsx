import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const UserInfo = () => {
  return (
    <>
      {" "}
      <section className="h-[900px] flex justify-center px-60 pt-40 gap-20 bg-slate-50">
        <div className="flex flex-col gap-2 font-medium text-md">
          <Link href="/">
            <button className=" bg-white rounded-full w-60 h-10 text-start pl-4">
              Хэрэглэгчийн хэсэг
            </button>{" "}
          </Link>
          <Link href="../order-history">
            <button className="text-md text-gray-700 pl-4">
              Захиалгын түүх
            </button>{" "}
          </Link>
        </div>
        <section className="flex flex-col gap-5">
          <h3 className="font-bold">Хэрэглэгчийн хэсэг</h3>
          <div>
            {" "}
            <p>Овог:</p>
            <input
              type="text"
              className="h-6 w-[600px] border rounded-full pl-2 text-xs"
              name="lastname"
            />{" "}
          </div>
          <div>
            {" "}
            <p>Нэр:</p>
            <input
              type="text"
              className="h-6 w-[600px] border rounded-full pl-2 text-xs"
              name="lastname"
            />{" "}
          </div>
          <div>
            {" "}
            <p>Утасны дугаар:</p>
            <input
              type="text"
              className="h-6 w-[600px] border rounded-full pl-2 text-xs"
              name="lastname"
            />{" "}
          </div>
          <div>
            {" "}
            <p>Имэйл хаяг:</p>
            <input
              type="text"
              className="h-6 w-[600px] border rounded-full pl-2 text-xs"
              name="lastname"
            />{" "}
          </div>
          <div>
            {" "}
            <p>Хаяг</p>
            <input
              type="text"
              className="h-20 w-[600px] border rounded-xl pl-2 text-xs"
              name="lastname"
            />{" "}
          </div>
          <button className="w-72 h-8 border bg-blue-600 rounded-full text-white ml-80">
            Мэдээлэл шинэчлэх
          </button>
        </section>
      </section>
    </>
  );
};
export default UserInfo;

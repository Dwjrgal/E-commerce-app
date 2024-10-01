"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import Link from "next/link";
import { UserContext } from "@/components/context/user-context";

const Login = () => {
  const router = useRouter();
  const { logIn, handleLogForm } = useContext(UserContext);
  const handleLogIn = () => {
    logIn();
  };
  return (
    <>
      <section className="flex flex-col items-center py-80 bg-slate-100">
        <h2 className="font-bold text-lg mb-5">Нэвтрэх</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-72 h-8 border rounded-full pl-2 text-xs"
            placeholder="Имэйл хаяг"
            name="email"
            onChange={handleLogForm}
          />
          <input
            type="password"
            className="w-72 h-8 border rounded-full pl-2 text-xs"
            placeholder="Нууц үг"
            name="password"
            onChange={handleLogForm}
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="w-72 h-8 border rounded-full bg-blue-600 text-white"
            onClick={handleLogIn}
          >
            Нэвтрэх
          </button>
          <Link href={"/email"}>
            <p className="text-center border-b-[1px] border-slate-200 text-xs text-slate-600 px-3 pb-2">
              Нууц үг мартсан
            </p>
          </Link>
          <button className="w-72 h-8 border border-blue-600 rounded-full text-blue-700 mt-8">
            Бүртгүүлэх
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;

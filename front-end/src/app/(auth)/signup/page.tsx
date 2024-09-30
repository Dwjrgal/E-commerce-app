"use client";

import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "@/context/user-context";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const { signUp, handleLogForm } = useContext(UserContext);
  const handleSignUp = () => {
    signUp();
  };

  return (
    <section className="flex flex-col items-center justify-center py-60 bg-slate-100">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl text-center mb-5">Бүртгүүлэх</h2>
        <input
          type="text"
          className="w-72 h-8 border rounded-full pl-2 text-xs"
          placeholder="Нэр"
          name="firstname"
          onChange={handleLogForm}
        />
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
        <input
          type="password"
          className="w-72 h-8 border rounded-full pl-2 text-xs"
          placeholder="Нууц үг давтах "
          name="repassword"
          onChange={handleLogForm}
        />
        <ul className="list-disc text-xs text-gray-500 flex flex-col gap-2 pl-5">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li className="text-red-500 ">Тэмдэгт орсон байх</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <button
          className="w-72 h-8 border rounded-full bg-blue-600 text-white"
          onClick={handleSignUp}
        >
          Үүсгэх
        </button>
        <Link href="/login">
          <button className="w-72 h-8 border border-blue-600 rounded-full text-blue-700 ">
            Нэвтрэх
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Signup;

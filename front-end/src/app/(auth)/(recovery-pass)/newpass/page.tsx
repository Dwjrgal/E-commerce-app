"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewPass = () => {
  const router = useRouter();

  const handleNewPass = () => {
    router.push("/login");
  };

  return (
    <div className="h-[800px] bg-slate-100 flex flex-col items-center gap-3 pt-40">
      <h2 className="font-bold text-lg mb-4">Нууц үг сэргээх</h2>
      <input
        type="text"
        className="w-72 h-10 border rounded-full pl-2 text-xs"
        placeholder="Шинэ нууц үг"
      />
      <input
        type="text"
        className="w-72 h-10 border rounded-full pl-2 text-xs"
        placeholder="Шинэ нууц үг давтах"
      />
      <ul className="list-disc text-xs text-gray-500 mr-24 flex flex-col gap-2">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li className="text-red-500 ">Тэмдэгт орсон байх</li>
      </ul>
      <button
        className="w-72 h-10 border bg-blue-600 rounded-full text-white mt-4"
        onClick={handleNewPass}
      >
        Үүсгэх
      </button>
    </div>
  );
};

export default NewPass;

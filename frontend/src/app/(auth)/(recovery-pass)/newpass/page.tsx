"use client";

// import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "@/lib/util";

const NewPass = () => {
  // const params = useSearchParams();
  // const router = useRouter();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const handleNewPass = async () => {
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }
    try {
      const res = await axios.post(`${apiUrl}/auth/verify-password`, {
        password,
        resetToken: "",
      });
      console.log("response:", res);

      if (res.status === 200) {
        toast.success("password");
        // router.push("/login");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="h-[800px] bg-slate-100 flex flex-col items-center gap-3 pt-40">
      <h2 className="font-bold text-lg mb-4">Нууц үг сэргээх</h2>
      <input
        type="password"
        className="w-72 h-10 border rounded-full pl-2 text-xs"
        placeholder="Шинэ нууц үг"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="w-72 h-10 border rounded-full pl-2 text-xs"
        placeholder="Шинэ нууц үг давтах"
        name="repassword"
        onChange={(e) => setRePassword(e.target.value)}
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

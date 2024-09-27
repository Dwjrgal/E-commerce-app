"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const logIn = async () => {
    const { email, password } = userData;
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      console.log("res", res);

      if (res.status === 200) {
        toast.success(" User successfully logged in", { autoClose: 1000 });
        const { token } = res.data;
        console.log("token", token);
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error logged in:", error);
      toast.error("Failed to log in . Please try again.");
    }
    console.log("user data", userData);
  };
  console.log("user:", userData);
  return (
    <>
      <section className="flex flex-col items-center py-80 bg-slate-100">
        <h2 className="font-bold text-lg mb-5">Нэвтрэх</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="w-60 h-8 border rounded-full pl-2 text-xs"
            placeholder="Имэйл хаяг"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            className="w-60 h-8 border rounded-full pl-2 text-xs"
            placeholder="Нууц үг"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="w-60 h-8 border rounded-full bg-blue-600 text-white"
            onClick={logIn}
          >
            Үүсгэх
          </button>
          <Link href={"/email"}>
            <p className="text-center border-b-[1px] border-slate-200 text-xs text-slate-600 px-3 pb-2">
              Нууц үг мартсан
            </p>
          </Link>
          <button className="w-60 h-8 border border-blue-600 rounded-full text-blue-700 mt-8 ">
            Нэвтрэх
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;

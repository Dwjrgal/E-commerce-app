 "use client";
import { useRouter } from 'next/navigation';
 import React, { useState } from 'react'
 import { toast } from "react-toastify"
 import axios from "axios"
//  interface UserDataType {
//   firstname: string;
//   email: string;
//   password : string | number;
//   repassword: string | number;
//  }

const Signup = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
   firstname: "",
  email: "",
password: "",
repassword: ""})
 const signUp = async () => {
  const { firstname, email, password, repassword } = userData;

  if (password !== repassword) {
    toast.error("Нууц үг хоорондоо тохирохгүй байна.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:8000/api/v1/auth/signup", {
      email, firstname, password 
    });

    if (response.status === 201) {
      toast.success("User successfully signed up", { autoClose: 1000 });
      router.push("/login");
    }
  } catch (error) {
    console.error("There was an error signing up:", error);
    toast.error("Failed to sign up. Please try again.");
  }
   
  console.log("user data", userData)
 }
  return (
    <section className="flex flex-col items-center justify-center py-80 bg-slate-100">
    <div className='flex flex-col gap-3'>
        <h2 className='font-bold text-xl text-center mb-5'>Бүртгүүлэх</h2>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs'
         placeholder='Нэр' 
         value={userData.firstname} 
         onChange={(e) =>setUserData({ ...userData, firstname: e.target.value })}/>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Имэйл хаяг'
        value={userData.email} 
        onChange={(e) =>setUserData({ ...userData, email: e.target.value })} />
        <input type="password" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нууц үг'
        value={userData.password} 
        onChange={(e) =>setUserData({ ...userData, password: e.target.value })}/>
        <input type="password"className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нууц үг давтах '
        value={userData.repassword} 
        onChange={(e) =>setUserData({ ...userData, repassword: e.target.value })} />
    </div>
    <div className='flex flex-col gap-4 mt-4'>
    <button className='w-60 h-8 border rounded-full bg-blue-600 text-white' onClick={signUp}>Үүсгэх</button>
    <button className='w-60 h-8 border border-blue-600 rounded-full text-blue-700 ' >Нэвтрэх</button>
    </div>
    </section>
  )
}

export default Signup
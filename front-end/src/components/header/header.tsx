import React from 'react'
import { Button } from "@/components/ui/button"
import { CiHeart } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";

const Header = () => {
  return (
    <div>
         <header className='h-20 bg-black flex justify-between items-center px-20'>
    <div className='flex gap-8 items-center'>
        <img src="/img/Logo/Logo.png" alt="" />
        <h3 className='text-slate-200'>Ангилал</h3>
    </div>
    <div className='w-64 h-14   rounded-full bg-primary pl-4 flex items-center gap-2'>
     <BiSearchAlt2 className='text-2xl font-bold text-white '/>
     <input type="text" placeholder='
      Бүтээгдэхүүн хайх' className='bg-primary'/>
   </div>
<div className='text-white  text-2xl flex gap-4 items-center font-extralight'>
  <VscHeart />
  <PiShoppingCart />
    <Button className='outline outline-blue-600 rounded-full bg-inherit'>Бүртгүүлэх</Button>
    <Button className='rounded-full bg-blue-600 text-white'>Нэвтрэх</Button>
</div>

    </header>
    </div>
  )
}

export default Header
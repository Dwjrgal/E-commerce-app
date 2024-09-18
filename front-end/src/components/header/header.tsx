import React from 'react'
import { Button } from "@/components/ui/button"
import { CiHeart } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";


const Header = () => {
  return (
    <div>
         <header className='h-20 bg-black flex justify-between items-center px-20'>
    <div className='flex gap-6 items-center'>
        <img src="/img/Logo/Logo.png" alt="" />
        <h3 className='text-slate-300'>Ангилал</h3>
    </div>
    <div className='flex text-white text-xl items-center'>
    <BiSearchAlt2 className='relative left-20'/>
    <input type="text" placeholder='
Бүтээгдэхүүн хайх' className='h-10 w-64  rounded-full bg-primary pl-4 relative'/>
</div>
<div className='text-white flex gap-4 items-center text-2xl font-light'>
<CiHeart />
<PiShoppingCartSimpleLight/>
    <Button className='outline outline-blue-600 rounded-full bg-inherit'>Бүртгүүлэх</Button>
    <Button className='rounded-full bg-blue-600 text-white'>Нэвтрэх</Button>
</div>

    </header>
    </div>
  )
}

export default Header
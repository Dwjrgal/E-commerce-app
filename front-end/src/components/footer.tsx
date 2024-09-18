import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <>
    <section className='h-60 bg-black text-white flex flex-col px-40'>
        <div className='flex flex-col'>
            <div className= 'border-b-[1px] border-gray-700 flex justify-between pb-10 pt-10'>
            <img src="/img/Logo/Logo-ft.svg" alt=""/>
            <div className='flex gap-4'> 
                <div className='flex gap-4 w-10 h-10 border rounded-full'>
                <IoCallOutline />
                </div>
                <p>(976) 7007-1234</p>
               
                <div className='flex gap-4'>
                <IoCallOutline />
                <p>contact@ecommerce.mn</p>
                </div>
            </div>
            
            </div>
            <div className='flex justify-between pt-16 pb-5'>
                <p>© 2024 Ecommerce MN</p>
                <div className='flex gap-4 text-xl'><RiFacebookCircleFill />
                <FaInstagram />
                <VscTwitter />
                <ImLinkedin /></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
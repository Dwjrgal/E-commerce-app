import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <>
    <section className='h-60 bg-black text-white flex flex-col'>
        <div className='flex justify-center border-b-[1px] border-white mx-40'>
            {/* <img src="/img/Logo/Logo-ft.svg" alt="" /> */}
            {/* <div className='flex gap-4'> 
                <div className='flex '>
                <IoCallOutline className='w-10 h-10 border rounded-full' />
                
                <p>(976) 7007-1234</p>
                </div>
                <div className=' flex'>
                <IoCallOutline />
                <p>contact@ecommerce.mn</p>
                </div>
            </div> */}
            <div className='flex'>
                <p>© 2024 Ecommerce MN</p>
                <div className='flex gap-4'><RiFacebookCircleFill />
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
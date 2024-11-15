"use client";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="h-60 bg-black text-white flex flex-col px-40">
        <div className="flex flex-col">
          <div className="border-b-[1px] border-gray-700 flex justify-between pb-10 pt-10">
            <Image
              src="/img/Logo/Logo-ft.svg"
              alt="logo"
              width={20}
              height={20}
            />
            <div className="flex gap-4">
              <button className="border rounded-full w-8 h-8 text-center pl-2 text-md font-bold border-slate-500">
                {" "}
                <IoCallOutline />
              </button>
              <p>(976) 7007-1234</p>

              <button className="border rounded-full w-8 h-8 text-center pl-2 text-md font-bold border-slate-500">
                {" "}
                <FaRegEnvelope />
              </button>
              <p>contact@ecommerce.mn</p>
            </div>
          </div>
          <div className="flex justify-between pt-16">
            <p>© 2024 Ecommerce MN</p>
            <div className="flex gap-4 text-xl">
              <RiFacebookCircleFill />
              <FaInstagram />
              <VscTwitter />
              <ImLinkedin />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

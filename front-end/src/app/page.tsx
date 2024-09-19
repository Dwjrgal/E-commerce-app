"use client"

import Image from "next/image";
import { Label } from "recharts";
import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";


export default function Home() {

  return (
   <div>
    <HeroSection/>
   </div>
  );
}

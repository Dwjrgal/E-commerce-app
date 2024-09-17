"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Label } from "recharts";
import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState<number>(6);
  const minus = () =>{
    setCount(count -1 );
  }
  const add = () =>{
    setCount(count + 1)
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Welcome E-commerce App</h1>
     <div>
   <Button onClick={minus}>-</Button>
   <Label className="text-2xl mx-4">{count}</Label>
   <Button onClick={add}>+</Button>
     </div>
       
    </div>
  );
}

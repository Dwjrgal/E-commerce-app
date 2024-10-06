import { products } from '@/lib/data'
import React from 'react'
import { GoTrash } from "react-icons/go";

const Cart = () => { 
    const ordered = products.slice(1, 4)
  return (
    <section className='bg-slate-100 flex justify-center items-center'>
    <div className='w-[800px], h-[400px] border rounded-xl my-10 bg-white'>
        <h3>Сагс (4)</h3>
        <div className="flex flex-col  justify-center gap-5 w-[400px] h-[400px]">
              {ordered.map((r) => (
                <div className="flex justify-between mx-10 border rounded-xl px-5 py-4">
                  <div className="flex gap-2">
                    <img src={r.image} className="w-[50px] h-[50px] rounded " />{" "}
                    <ul className="font-normal text-[13px]">
                      <li>{r.name}</li>
                      <div className="flex item-center gap-2 mt-3">
              <button className="w-6 h-6 rounded-full border-[1px] border-black text-center ">
                -{" "}
              </button>
              <p>1</p>
              <button className="w-6 h-6 rounded-full border-[1px] border-black text-center ">
                +
              </button>
            </div>
                    </ul>
                  </div>{" "}
                  <GoTrash  className='my-auto'/>
                </div>
              ))}
              </div>
    </div>
    </section>
  )
}

export default Cart
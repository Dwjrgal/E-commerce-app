import React from 'react'
import { VscHeartFilled } from 'react-icons/vsc'

const Save = () => {
  return (
    <>
    <main className='w-screen h-screen bg-slate-100 flex flex-col items-center gap-4 pt-40'>
        <h3 className='mr-72 font-bold'>Хадгалсан бараа <span className='text-gray-400 font-normal'>(3)</span></h3>
        <div className="flex justify-between mx-10 border rounded-xl px-5 py-4 bg-white w-[450px] h-[120px]">
              <div className="flex gap-2">
                <img src="../products/image2.png" className="w-[80px] h-[80px] rounded-xl border" />{" "}
                <ul className="flex flex-col gap-[2px]">
                  <li className='font-normal text-gray-800'>Chunky Gylph Tee</li>
                  <li className='font-bold text-[13px]'>120’000₮</li>
                  <button className='w-[70px] h-6 bg-blue-700 text-white border rounded-full text-center text-[13px]'>Сагслах</button>
                </ul>
              </div>{" "}
              <VscHeartFilled className="mt-2" />
            </div>
    </main>
    </>
  )
}

export default Save
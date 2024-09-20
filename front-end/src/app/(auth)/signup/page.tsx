import React from 'react'

const Signup = () => {
  return (
    <section className="flex flex-col items-center justify-center py-80 bg-slate-100">
    <div className='flex flex-col gap-3'>
        <h2 className='font-bold text-xl text-center mb-5'>Бүртгүүлэх</h2>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нэр'/>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Имэйл хаяг' />
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нууц үг'/>
        <input type="text"className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нууц үг давтах ' />
    </div>
    <div className='flex flex-col gap-4 mt-4'>
    <button className='w-60 h-8 border rounded-full bg-blue-600 text-white'>Үүсгэх</button>
    <button className='w-60 h-8 border border-blue-600 rounded-full text-blue-700 ' >Нэвтрэх</button>
    </div>
    </section>
  )
}

export default Signup
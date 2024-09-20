import React from 'react'

const Login = () => {
  return (
    <>
    <section className='flex flex-col items-center py-80 bg-slate-100'>
        <h2 className='font-bold text-lg mb-5'>Нэвтрэх</h2>
        <div className='flex flex-col gap-3'>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Нэр'/>
        <input type="text" className='w-60 h-8 border rounded-full pl-2 text-xs' placeholder='Имэйл хаяг' />
        </div>
        <div className='flex flex-col gap-4 mt-4'>
    <button className='w-60 h-8 border rounded-full bg-blue-600 text-white'>Үүсгэх</button>
    <p className='text-center border-b-[1px] border-slate-200 text-xs text-slate-600 px-3 pb-2'>Нууц үг мартсан</p>
    <button className='w-60 h-8 border border-blue-600 rounded-full text-blue-700 mt-8 ' >Нэвтрэх</button>
    </div>
    </section>
    </>
  )
}

export default Login
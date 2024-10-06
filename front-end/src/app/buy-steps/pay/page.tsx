import React from 'react'

const Pay = () => {
  return (
    <section className='flex justify-center items-center bg-slate-100'>
    <div className='w-[500px] h-[400px] bg-white my-20 rounded-xl'>
        <h3 className='font-semibold ml-3 mt-4'> 3. Төлбөр төлөлт</h3>
        <div className='flex flex-col items-center my-5'>
            <span className='bg-gray-100 border rounded-xl w-14 text-center text-xs'>14:50</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className='w-36 h-36'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-xs'>Төлөх боломжтой банкууд:</p>
        </div>
    </div>
    </section>
  )
}

export default Pay
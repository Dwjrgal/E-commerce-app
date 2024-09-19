import React from 'react'

  export const HeroSection = () => {
  return (
    <div>
        <img src="/img/Logo/slider_img.png" alt=""  className='w-full h-[500px]'/>
        <CategorySection/>
    </div>
  )
}


 export const CategorySection = () => {
  return (
    <>
    <section className='flex justify-center gap-3'>
      <div className='w-[250px] h-[390px] border rounded'>
        <img src="" alt="" />
        <h4> The Prompt Magazine</h4>
        <p> 120,000</p>
      </div>
      <div className='w-[250px] h-[390px] border rounded'>
        <img src="" alt="" />
        <h4> The Prompt Magazine</h4>
        <p> 120,000</p>
      </div>
      <div className='w-[250px] h-[390px] border rounded'>
        <img src="" alt="" />
        <h4> The Prompt Magazine</h4>
        <p> 120,000</p>
      </div>
      <div className='w-[250px] h-[390px] border rounded'>
        <img src="" alt="" />
        <h4> The Prompt Magazine</h4>
        <p> 120,000</p>
      </div>
    </section>
    </>
  )
}


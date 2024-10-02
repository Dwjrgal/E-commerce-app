import React from 'react'
import { products } from '@/lib/data'
import { ProductCard } from '@/components/product-card';

const ProductDetail = () => {
    const sideImages = products.slice(1, 5); 
  return ( <>
  <main className='flex mx-auto max-w-[1000px] my-20'>
    <div className='flex gap-3'>
    <div className='flex flex-col gap-2'>
        {sideImages.map((i) => (
            <img src={i.image} className='w-16 h-16 rounded' />
        ))}
    </div>
    <img src="" className='border w-60 h-60 rounded-xl'/> </div>
    <section className='flex flex-col gap-10 ml-20 my-20'>
    <div>
        <span className='w-20 h-5 border rounded border-blue-500'>Шинэ</span>
        <h2>Wildflower Hoodie</h2>
        <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
        <p className='font-semibold text-xs'>Хэмжээний заавар</p>
        <ul className='flex gap-2'>
            <li className='w-8 h-8 rounded-full border text-center bg-black text-white'>S</li>
            <li className='w-8 h-8 rounded-full border text-center'>M</li>
            <li className='w-8 h-8 rounded-full border text-center'>L</li>
            <li className='w-8 h-8 rounded-full border text-center'>XL</li>
        </ul>
        <div className='flex item-center gap-2 mt-3'>
             <button className='w-8 h-8 rounded-full border text-center '>- </button>
                <p>1</p>
                <button className='w-8 h-8 rounded-full border text-center '>+</button>
            </div>
    </div>
     <div className='flex flex-col gap-2 mt-8'>
        <h4>120’000₮</h4>
        <button className='w-40 h-8 rounded-full text-white bg-blue-600'>Сагсанд нэмэх</button>
     </div>
    </section>
    </main>
    <p className='font-bold text-2xl ml-64'>Холбоотой бараа</p>
    <RelativeCards/>
    </>
  )
}

export default ProductDetail

export const RelativeCards =() =>{
    const relativeCards = products.slice(1, 9);
    return(
        <>
        <section className='mt-5 mb-24 max-w-[1000px] mx-auto grid grid-cols-4 gap-y-12 gap-x-6'>
        {relativeCards.map(( product) =>(
           <ProductCard
           name={product.name}
           price={product.price}
           image={product.image}
           discount={product.discount}
       />
        ))} </section>
        </>
    )
} 
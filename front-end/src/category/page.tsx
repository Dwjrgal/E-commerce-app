import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/data'
import React from 'react'


const CategoryPage = () => {
  return (
    <main className='flex justify-end mr-60 my-20'>
        <section className='grid grid-cols-3 gap-y-12 grid-rows-5 gap-x-4'>
            {products.map((product) => {
                return(
                    <>
                    <ProductCard
									name={product.name}
									price={product.price}
									image={product.image}
									discount={product.discount}
								/>
                    </>
                )
            })}
        </section>
    </main>
  )
}

export default CategoryPage
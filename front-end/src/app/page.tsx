 "use-client"
 import { Hero } from "@/components/home/hero";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function Home() {
	return (
		<main>
			<Hero />
			<section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
				{products.map((product, index) => {
					return (
						<>
							{index === 6 || index === 7 ? (
								<FeaturedProductCard
									key={index}
									name={product.name}
									price={product.price}
									image={product.image}
									discount={product.discount}
								/>
							) : (
								<ProductCard
									key={index}
									name={product.name}
									price={product.price}
									image={product.image}
									discount={product.discount}
								/>
							)}
						</>
					);
				})}
			</section>
		</main>
	);
}

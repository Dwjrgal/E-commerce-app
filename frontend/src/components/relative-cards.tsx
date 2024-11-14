import { ProductsContext } from "@/context/products-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Heart } from "lucide-react";

interface RelativeProduct {
  _id: string;
  images: string[];
  name: string;
  price: number;
}
export const RelativeCards = () => {
  const { productsData } = useContext(ProductsContext);
  const relativeCards: RelativeProduct[] = productsData.slice(1, 9);

  return (
    <section className="mt-5 mb-24 max-w-[1000px] mx-auto grid grid-cols-4 gap-y-12 gap-x-6">
      {relativeCards.map((product: RelativeProduct) => (
        <Link href={`/${product._id}`} key={product._id}>
          <div className="relative w-[244px]">
            <Image
              src={product.images[0]}
              alt="image1"
              width={244}
              height={331}
              className="rounded-xl"
            />
            <Heart
              size={22}
              strokeWidth={1}
              className="absolute top-4 right-4"
            />
            <div className="mt-2">
              <h3 className="font-normal">{product.name}</h3>
              <h4 className="font-bold">{product.price.toLocaleString()}₮</h4>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

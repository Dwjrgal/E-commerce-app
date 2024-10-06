import { Product, products } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";
import { formattedPrice } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";

interface IProduct {
  name: string;
  price: number;
  images: [string];
  discount: number;
}
const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const ProductCard = ({
  name,
  price,
  images,
  discount,
  id,
}: IProduct) => {
  return (
    <Link href={`/${id}`}>
      <div className="relative w-[244px]">
        <Image
          src={images[0]}
          alt="image1"
          width={244}
          height={331}
          className="rounded-xl"
        />
        <Heart size={22} strokeWidth={1} className="absolute top-4 right-4" />
        <div className="mt-2">
          <h3 className="font-normal">{name}</h3>
          <PriceWithDiscount price={price} discount={discount} />
        </div>
      </div>
    </Link>
  );
};

export const FeaturedProductCard = ({
  name,
  price,
  image,
  discount,
  id,
}: Product) => {
  return (
    <div className="relative col-span-2 row-span-10 mb-14">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="image1"
          fill={true}
          className="rounded-xl -z-10"
        />
        <Heart size={22} strokeWidth={1} className="absolute top-4 right-4" />
      </div>
      <div className="mt-2">
        <h3 className="font-normal">{name}</h3>
        <PriceWithDiscount price={price} discount={discount} />
      </div>
    </div>
  );
};

const PriceWithDiscount = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const discountedPrice = getDiscountedPrice(price, discount);
  return (
    <div className="flex items-center gap-4 mt-1">
      <p className="font-bold">
        {formattedPrice(discount > 0 ? discountedPrice : price)}₮
      </p>
      {discount > 0 && (
        <>
          <span className="text-muted-foreground text-xs line-through">
            {`${formattedPrice(price)}₮`}
          </span>
          <span className="font-bold text-destructive">{discount}%</span>
        </>
      )}
    </div>
  );
};
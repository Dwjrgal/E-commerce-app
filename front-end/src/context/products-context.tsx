"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import { apiUrl } from "@/lib/util";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
}

interface ProductsContextType {
  getAllProducts: () => void;
  productsData: IProduct | [];
  setProductsData: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

export const ProductsContext = createContext<ProductsContextType>({
  productsData: [],
  setProductsData: () => {},
  getAllProducts: () => {},
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsData, setProductsData] = useState<IProduct | []>([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products`);
      setProductsData(res.data.products);
    } catch (error) {
      console.error("Failed to get all products", error);
      toast.error("Failed to fetch products data");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log("DATA", productsData);

  return (
    <ProductsContext.Provider value={{ getAllProducts, productsData }}>
      {children}
    </ProductsContext.Provider>
  );
};

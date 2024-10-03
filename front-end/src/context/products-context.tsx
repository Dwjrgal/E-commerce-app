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
import { useRouter } from "next/navigation";

interface ProductsType {
  name: string;
  price: number;
  image: string;
  discount: number;
}

interface ProductsContextType {
  getAllProducts: () => void;
}

export const ProductContext = createContext<ProductsContextType>({
  getAllProducts: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsData, setProductsData] = useState<ProductsType[]>([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/products");
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
    <ProductContext.Provider value={{ getAllProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

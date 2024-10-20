"use client";
import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";
import { useParams} from "next/navigation";
import { apiUrl } from "@/lib/util";

interface IProduct {
  _id: string;
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
  productsData: IProduct[];
  setProductsData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  searchValue: string;
  setSearchValue:  React.ChangeEvent<HTMLInputElement>;
  handleAddList: () => void;
}

export const ProductsContext = createContext<ProductsContextType>({
  productsData: [],
  setProductsData: () => {},
  getAllProducts: () => {},
  searchValue: "",
  setSearchValue:(e: React.ChangeEvent.<HTMLInputElement>) => {},
  handleAddList: () => {},
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const { id } = useParams();

  const handleAddList = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${apiUrl}/wishlist`,
        {
          productId: id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        toast.success("Added cart successfully");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("failed to add wishlist");
    }
  };

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
    <ProductsContext.Provider
      value={{
        getAllProducts,
        productsData,
        setProductsData,
        searchValue,
        setSearchValue,
        handleAddList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

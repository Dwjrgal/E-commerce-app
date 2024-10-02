import { Request, Response } from "express";
import Product from "../models/product.model";

export const insertProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      size,
      image,
      isNew,
      quantity,
      discount,
      category,
    } = req.body;
    const postedProduct = await Product.create({
      name,
      description,
      price,
      size,
      image,
      isNew,
      quantity,
      discount,
      category,
    });
    res.status(201).json({ message: "success", product: postedProduct });
  } catch (error) {
    res.status(201).json({ message: "server error", error: error });
  }
};

export const getProductData = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      size,
      image,
      isNew,
      quantity,
      discount,
      category,
    } = req.body;
    const getProduct = await Product.find();
    res.status(201).json({ message: "success", productData: getProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product data", error });
  }
};

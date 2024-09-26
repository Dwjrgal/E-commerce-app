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

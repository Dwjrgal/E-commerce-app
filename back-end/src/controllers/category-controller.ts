import { Request, Response } from "express";
import Category from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const createCat = await Category.create({
      name,
      description,
    });

    res.status(201).json({ message: " success", category: createCat });
  } catch (error) {
    res.status(201).json({ message: "server error", error: error });
  }
};

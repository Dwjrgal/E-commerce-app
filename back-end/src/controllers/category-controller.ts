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
    res.status(500).json({ message: "server error", error: error });
  }
};
export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    console.log("category name and description", name, description);
    const getCategory = await Category.find();
    res.status(200).json({
      message: "Success",
      category: getCategory,
    });
  } catch (error) {
    res.status(500).json({ message: " Server error", error });
  }
};

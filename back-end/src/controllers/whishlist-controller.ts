
import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createWhishList = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });
    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({
        message: "created wish list",
        cart,
      });
    }
    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );
    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
    } else {
      findUserCart.products.push({ product: productId, quantity });
    }
    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "updated cart",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to read carts",
    });
  }
};

export const getAllList = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const findUserCart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    console.log("cart data", findUserCart);
    res.status(201).json({ message: "success", data: findUserCart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


export const deleteCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { productId } = req.params;
  try {
    const findUserCart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    const product = findUserCart?.products[0].product;
    console.log("product", product);
    const deleteProductCart = await Cart.findByIdAndDelete({});
    res.status(200).json({
      message: "deleted product cart successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to delete product cart" });
  }
};

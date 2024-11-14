import { Request, Response } from "express";
import wishList from "../models/wishlist.model";

export const createWhishList = async (req: Request, res: Response) => {
  const { productId, quantity, price } = req.body;
  const { id: userId } = req.user;
  try {
    const findUserCart = await wishList.findOne({ user: userId });
    if (!findUserCart) {
      const cart = await wishList.create({
        user: userId,
        products: { product: productId, quantity },
        price,
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
      findUserCart.products.push({ product: productId, quantity, price });
    }
    const updatedCart = await findUserCart.save();
    res.status(200).json({
      message: "created wishlist successfully",
      updatedCart,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to create wishlist",
    });
  }
};

export const getList = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  try {
    const findUserCart = await wishList
      .findOne({ user: userId })
      .populate("products.product");
    console.log("cart data", findUserCart);
    res.status(200).json({ message: "success", wishList: findUserCart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  const { productId } = req.params;
  try {
    const findUserCart = await wishList
      .findOne({ user: userId })
      .populate("products.product");
    const product = findUserCart?.products[0].product;
    console.log("product", product);
    const deleteProductCart = await wishList.findByIdAndDelete({});
    res.status(200).json({
      message: "deleted product cart successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to delete product cart" });
  }
};

import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, totalAmount, quantity, price } = req.body;
  try {
    const findUserCart = await Cart.findOne({ user: userId });
    if (!findUserCart) {
      const cart = await Cart.create({
        user: userId,
        products: { product: productId, quantity },
        totalAmount,
      });
      return res.status(200).json({
        message: "created new cart",
        cart,
      });
    }
    const findDuplicated = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );
    if (findDuplicated > -1) {
      findUserCart.products[findDuplicated].quantity += quantity;
      const totalAmount = price * quantity;
    } else {
      findUserCart.products.push({ product: productId, quantity }, totalAmount);
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

export const getAllCarts = async (req: Request, res: Response) => {
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

export const updateCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  console.log("user id", id);
  const { productId, newQuantity } = req.body;
  try {
    const cart = await Cart.findOne({ user: id });
    if (!cart) {
      return res.status(400).json({ message: "not found user" });
    }

    const findProduct = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );
    console.log("findProduct", findProduct);
    cart.products[findProduct].quantity = newQuantity;

    const updatedCart = await cart.save();
    res.status(200).json({ message: "updated cart", updatedCart });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to update cart",
    });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { productId } = req.params;
  console.log("product id", productId);

  try {
    const findUserCart = await Cart.findOne({ user: id });
    if (!findUserCart) {
      return res.status(400).json({ message: "not found user" });
    }
    const findProduct = findUserCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (findProduct > -1) {
      findUserCart.products.splice(findProduct, 1);
    }
    const deleteProductCard = await findUserCart.save();
    res.status(200).json({
      message: "successfully deleted card",
      deleteProductCard,
    });
    console.log("deleted product cart", deleteProductCard);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "failed to delete product cart" });
  }
};

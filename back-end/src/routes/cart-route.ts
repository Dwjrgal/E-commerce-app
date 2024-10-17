import { Router } from "express";
import {
  createCart,
  deleteCart,
  getAllCarts,
  updateCart,
} from "../controllers/cart-controller";
const router = Router();

import { auth } from "../middlewares/auth";

router.route("/").post(createCart);
router.route("/:userId").get(getAllCarts);
router.route("/:productId").delete(auth, deleteCart);
router.route("/update-cart").put(auth, updateCart);
export default router;

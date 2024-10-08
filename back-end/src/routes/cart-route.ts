import { Router } from "express";
import { createCart, getAllCarts } from "../controllers/cart-controller";
const router = Router();

router.route("/").get(getAllCarts).post(createCart);
export default router;

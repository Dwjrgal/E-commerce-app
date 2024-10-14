import { Router } from "express";
import { createCart, deleteCart, getAllCarts } from "../controllers/cart-controller";
const router = Router();

router.route("/").post(createCart);
router.route("/:userId").get(getAllCarts);
router.route("/:productId").delete(deleteCart)
export default router;

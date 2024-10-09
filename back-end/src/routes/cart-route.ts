import { Router } from "express";
import { createCart, getAllCarts } from "../controllers/cart-controller";
const router = Router();

router.route("/").post(createCart);
router.route("/:userId").get(getAllCarts);
export default router;

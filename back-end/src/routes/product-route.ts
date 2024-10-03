import { Router } from "express";
import {
  insertProduct,
  getAllProduct,
  getProduct,
} from "../controllers/product-controller";

const router = Router();

router.route("/").get(getAllProduct);
router.route("/:productId").get(getProduct);
router.route("/").get().post(insertProduct);

export default router;

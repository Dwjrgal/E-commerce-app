import { Router } from "express";
import {
  createWhishList,
  deleteCart,
  getList,
} from "../controllers/whishlist-controller";
const router = Router();

import { auth } from "../middlewares/auth";

router.route("/").post(auth, createWhishList).get(auth, getList);
export default router;

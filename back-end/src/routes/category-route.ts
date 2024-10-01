import { Router } from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/category-controller";

const router = Router();

router.route("/").get(getAllCategory).post(createCategory);

export default router;

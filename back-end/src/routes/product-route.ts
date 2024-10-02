import { Router } from "express";
import { insertProduct } from "../controllers/product-controller";

const router = Router();

router.route("/").get().post(insertProduct);

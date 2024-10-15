import { Router } from "express";
import { createWhishList, deleteCart, getAllList} from "../controllers/whishlist-controller";
const router = Router();

import { auth } from "../middlewares/auth"

router.route("/").post(createWhishList);
router.route("/:userId").get( auth, getAllList);
export default router;

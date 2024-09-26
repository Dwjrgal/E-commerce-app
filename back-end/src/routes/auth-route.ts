import { Router } from "express";
import { login, signup } from "../controllers/auth-controller";

const router = Router();

// router.route("/current-user").get(auth, currentUser);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;

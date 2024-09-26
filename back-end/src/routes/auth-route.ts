import { Router } from "express";
import { login, signup, currentUser,verifyOtp, verifyPassword, forgetPassword } from "../controllers/auth-controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.route("/current-user").get(auth, currentUser);
router.route("/verify-password").post(verifyPassword);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;

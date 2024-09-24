const { Router } = require("express");
const { signup, login } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;

const express = require("express");
const router = express.Router();

const authController = require("../../controller/auth.controller");

router.post("/signup", authController.SignUp);
router.post("/signin", authController.SignIn);

module.exports = router;
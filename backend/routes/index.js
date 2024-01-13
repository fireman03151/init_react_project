const express = require("express");
const router = express.Router();

// const authController = require("../controller/authController");

router.use("/user", require('./api/user'));
router.use("/job", require('./api/job'));
// router.post("/login", authController.Login);

module.exports = router;

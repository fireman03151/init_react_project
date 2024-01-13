const express = require("express");
const router = express.Router();

const JobController = require("../../controller/Job.controller");

router.post('/', JobController.create);
router.get('/', JobController.getData);

// router.post("/signup", authController.SignUp);
// router.post("/signin", authController.SignIn);

module.exports = router;
const express = require("express");
const router = express.Router();

const userController = require("./user.controller");

router.post("/signup", userController.signUpUser);

router.post("/login", userController.loginUser);

// router.post("/send-otp", userController.sendOTP);

module.exports = router;

const express = require("express");
const router = express.Router();
const { login } = require("../controller/login-controller");
const { register} = require("../controller/register-controller");

router.post("/register", register);
router.post("/login", login);

module.exports = router;

const express = require("express");
const router = express.Router();
const registerAuth = require("../controller/registerAuth");
const loginAuth = require("../controller/loginAuth");

router.post("/register", registerAuth);
router.post("/login", loginAuth);

module.exports = router;

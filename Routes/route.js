const express = require("express");
const { signUp } = require("../Controllers/signUp");
const { login } = require("../Controllers/login");
const { requireToken } = require("../Middleware/requireToken");


const router = express.Router();


router.post("/signup", signUp);
router.post("/login", login);
router.get("/protected",  requireToken);


module.exports = router;


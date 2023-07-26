const express = require("express");
const { signUp } = require("../Controllers/signUp");
const { login } = require("../Controllers/login");
const { createChecklist } = require("../Controllers/createChecklist");
const { requireToken } = require("../Middleware/requireToken");
const { getUser } = require("../Controllers/getUser");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/protected", requireToken);
router.post("/createChecklist", createChecklist);
router.get("/getUser", getUser);

module.exports = router;

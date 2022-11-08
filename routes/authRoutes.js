const express = require("express");
const { signToken } = require("../controllers/authController");
const router = express.Router();

router.get("/token", signToken);

module.exports = router;

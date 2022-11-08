const express = require("express");
const { signToken } = require("../controllers/userController");
const router = express.Router();

router.get("/token", signToken);

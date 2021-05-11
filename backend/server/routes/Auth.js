const express = require("express");
const UserController = require("../controller/UserController");

const router = express.Router();

router.get("/", UserController.loginUser);

module.exports = router;

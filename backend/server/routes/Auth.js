const express = require("express");
const UserController = require("../controller/UserController");

const router = express.Router();

router.post("/", UserController.loginUser);
router.get("/me", UserController.meUser);
module.exports = router;

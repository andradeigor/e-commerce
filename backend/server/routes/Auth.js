const express = require("express");
const UserController = require("../controller/UserController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();

router.post("/", UserController.loginUser);
router.get("/me", AuthMiddleware.TokenMiddleware, UserController.meUser);
module.exports = router;

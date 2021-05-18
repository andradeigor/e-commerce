const express = require("express");
const PuchaseController = require("../controller/PurchaseController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.post(
  "/",
  AuthMiddleware.TokenMiddleware,
  PuchaseController.createPurchase
);
module.exports = router;

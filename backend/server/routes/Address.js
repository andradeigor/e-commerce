const express = require("express");
const AddressController = require("../controller/AddressController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");

const router = express.Router();

router.post(
  "/",
  AuthMiddleware.TokenMiddleware,
  AddressController.createAddress
); // creat a new address, with a userId
router.get(
  "/",
  AuthMiddleware.TokenMiddleware,
  AddressController.listAddresses
); // acess all the address that exist in the DB
router.get(
  "/",
  AuthMiddleware.TokenMiddleware,
  AddressController.listAddressesFromUser
); // acess all the addresses that ONE user has
router.get(
  "/:id/",
  AuthMiddleware.TokenMiddleware,
  AddressController.listAddressFromUser
); // acess ONE address that ONE user has
router.put(
  "/:id/",
  AuthMiddleware.TokenMiddleware,
  AddressController.updateAddress
);
router.delete(
  "/:id/",
  AuthMiddleware.TokenMiddleware,
  AddressController.deleteAddress
); // delete a existed addres.
module.exports = router;

const express = require("express");
const AddressController = require("../../database/controller/AddressController");

const router = express.Router();

router.post("/:userId/address", AddressController.createAddress); // creat a new address, with a userId
router.delete("/:userId/address/:id", AddressController.deleteAddress); // delete a existed addres.
router.get("/address/", AddressController.listAddresses); // acess all the address that exist in the DB
router.get("/:userId/address/", AddressController.listAddressesFromUser); // acess all the address that ONE user has
router.get("/:userId/address/:id", AddressController.listAddressFromUser);
module.exports = router;

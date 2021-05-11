const express = require("express");
const AddressController = require("../controller/AddressController");

const router = express.Router();

router.post("/", AddressController.createAddress); // creat a new address, with a userId
router.get("/", AddressController.listAddresses); // acess all the address that exist in the DB
router.get("/", AddressController.listAddressesFromUser); // acess all the addresses that ONE user has
router.get("/:id/", AddressController.listAddressFromUser); // acess ONE address that ONE user has
router.put("/:id/", AddressController.updateAddress);
router.delete("/:id/", AddressController.deleteAddress); // delete a existed addres.
module.exports = router;

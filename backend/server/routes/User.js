const express = require("express");
const UserController = require("../controller/UserController");

const router = express.Router();

router.post("/", UserController.createUser); //creat a new user
router.get("/", UserController.listUsers); //list all users
router.get("/:id", UserController.listUser); //list ONE user by id
router.put("/:id", UserController.updateUser); // update ONE user by id
router.delete("/:id", UserController.deleteUser); // delete ONE user by id

module.exports = router;

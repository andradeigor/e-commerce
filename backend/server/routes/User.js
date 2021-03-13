const { Router } = require("express");
const express = require("express");
const UserController = require("../../database/controller/UserController");

const router = express.Router();

router.post("/users", UserController.createUser); //creat a new user
router.get("/users", UserController.listUsers); //list all users
router.get("/users/:id", UserController.listUser); //list ONE user by id
router.put("/users/:id", UserController.updateUser); // update ONE user by id
router.delete("/users/:id", UserController.deleteUser); // delete ONE user by id

module.exports = router;

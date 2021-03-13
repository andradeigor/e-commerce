const { Router } = require("express");
const express = require("express");
const UserController = require("../../database/controller/UserController");

const routes = express.Router();

routes.post("/Users", UserController.store);

module.exports = routes;

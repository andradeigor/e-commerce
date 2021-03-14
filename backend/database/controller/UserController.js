const UserModel = require("../models/UserModel");
const userService = require("../services/UserService");

module.exports = {
  async createUser(req, res) {
    const user = await userService.createUser(req, res);
    return res.json(user);
  },

  async listUsers(req, res) {
    const users = await userService.listUsers(req, res);
    return res.json(users);
  },

  async listUser(req, res) {
    const user = await userService.listUser(req, res);
    return res.json(user);
  },

  async updateUser(req, res) {
    const updatedUser = await userService.updateUser(req, res);
    return res.json(updatedUser);
  },

  async deleteUser(req, res) {
    await userService.deleteUser(req, res);
    return res.json({ menssage: `User id: ${req.params.id} deleted` });
  },
};

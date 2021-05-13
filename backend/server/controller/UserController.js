const UserService = require("../../database/services/UserService");

module.exports = {
  async createUser(req, res) {
    console.log("alo");
    const user = await UserService.createUser(req, res);
    return res.json(user);
  },

  async listUsers(req, res) {
    const users = await UserService.listUsers(req, res);
    return res.json(users);
  },

  async listUser(req, res) {
    const user = await UserService.listUser(req, res);
    return res.json(user);
  },

  async updateUser(req, res) {
    const updatedUser = await UserService.updateUser(req, res);
    return res.json(updatedUser);
  },

  async deleteUser(req, res) {
    await UserService.deleteUser(req, res);
    return res.json({ menssage: `User id: ${req.params.id} deleted` });
  },
  async loginUser(req, res) {
    const token = await UserService.loginUser(req, res);
    return res.json(token);
  },
  async meUser(req, res) {
    const user = await UserService.meUser(req, res);
    return res.json(user);
  },
};

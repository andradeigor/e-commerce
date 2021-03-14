const UserModel = require("../models/UserModel");
const UtilsBcrypt = require("../../server/utils/bcrypt");

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await UtilsBcrypt.encrypt(password);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  },

  async listUsers(req, res) {
    const users = await UserModel.findAll();
    return res.json(users);
  },

  async listUser(req, res) {
    const user = await UserModel.findByPk(req.params.id);
    return res.json(user);
  },

  async updateUser(req, res) {
    const { name, email } = req.body;
    await UserModel.update({ name }, { where: { id: req.params.id } });
    await UserModel.update({ email }, { where: { id: req.params.id } });
    const updatedUser = await UserModel.findByPk(req.params.id);
    return res.json(updatedUser);
  },

  async deleteUser(req, res) {
    await UserModel.destroy({ where: { id: req.params.id } });
    res.json({ menssage: "deleted" });
  },
};

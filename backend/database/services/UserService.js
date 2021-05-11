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
    return user;
  },
  async listUsers(req, res) {
    return await UserModel.findAll();
  },
  async listUser(req, res) {
    return (user = await UserModel.findByPk(req.params.id));
  },
  async updateUser(req, res) {
    const { name, email } = req.body;
    await UserModel.update({ name }, { where: { id: req.params.id } });
    await UserModel.update({ email }, { where: { id: req.params.id } });
    return UserModel.findByPk(req.params.id);
  },
  async deleteUser(req, res) {
    return UserModel.destroy({ where: { id: req.params.id } });
  },
  async loginUser(req, res) {
    const [, encriptData] = req.headers.authorization.split(" ");
    const [email, password] = Buffer.from(encriptData, "base64")
      .toString()
      .split(":");
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      res.send(400, "Invalid Email or Password");
    }
    return { email, password };
  },
};

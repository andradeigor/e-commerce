const UserModel = require("../models/UserModel");
const UtilsBcrypt = require("../../server/utils/bcrypt");
const UtilsJwt = require("../../server/utils/jwt");

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
    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      res.json(400, { error: "Invalid Email or Password" });
    }
    const login = await UtilsBcrypt.decript(password, user.password);
    if (login) {
      const token = await UtilsJwt.encrypt(user.id);
      return { token };
    } else {
      res.json(400, { error: "Invalid Email or Password" });
    }
  },
  async meUser(req, res) {
    const userId = res.locals.user;
    const user = await UserModel.findByPk(userId);
    user.password = undefined;
    return { user };
  },
};

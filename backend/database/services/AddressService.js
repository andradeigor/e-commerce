const AddressModel = require("../models/AddressModel");
const UserModel = require("../models/UserModel");

module.exports = {
  async createAddress(req, res) {
    const userId = req.params.userId;
    const { zipcode, street, number } = req.body;
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    const address = AddressModel.create({
      zipcode,
      street,
      number,
      userId,
    });
    return address;
  },
  async deleteAddress(req, res) {
    const addressId = req.params.id;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === Number(req.params.userId)) {
      await AddressModel.destroy({ where: { id: addressId } });
      res.json({ mensage: "deleted" });
    } else {
      return res.status(400).json({ error: "user not found" });
    }
  },
  async listAddresses(req, res) {
    return AddressModel.findAll();
  },
  async listAddressesFromUser(req, res) {
    return AddressModel.findAll({ where: { userId: req.params.userId } });
  },
  async listAddressFromUser(req, res) {
    const addressId = req.params.id;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === Number(req.params.userId)) {
      return address;
    } else {
      return res.status(400).json({ error: "user not found" });
    }
  },
};

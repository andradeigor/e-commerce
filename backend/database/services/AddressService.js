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
  async updateAddress(req, res) {
    const addressId = req.params.id;
    const userId = Number(req.params.userId);
    const { zipcode, street, number } = req.body;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === userId) {
      await AddressModel.update({ zipcode }, { where: { id: addressId } });
      await AddressModel.update({ street }, { where: { id: addressId } });
      await AddressModel.update({ number }, { where: { id: addressId } });
      const updateAddress = await AddressModel.findByPk(addressId);
      return updateAddress;
    } else {
      return res.status(400).json({ error: "user or address not found" });
    }
  },
  async deleteAddress(req, res) {
    const addressId = req.params.id;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === Number(req.params.userId)) {
      await AddressModel.destroy({ where: { id: addressId } });
      res.json({ mensage: "deleted", address });
    } else {
      return res.status(400).json({ error: "user not found" });
    }
  },
};

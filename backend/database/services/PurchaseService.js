const AddressModel = require("../models/AddressModel");
const UserModel = require("../models/UserModel");

module.exports = {
  async createPurchase(req, res) {
    const userId = res.locals.user;
    const user = await UserModel.findByPk(userId);
    const addressId = req.body.addressId;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === Number(userId)) {
      return { address: address, user: user };
    } else {
      return res.status(400).json({ error: " address id or user id invalid" });
    }
  },
};

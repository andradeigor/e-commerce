const AddressModel = require("../models/AddressModel");
const UserModel = require("../models/UserModel");
const PurchaseModel = require("../models/PurchaseModel");
module.exports = {
  async createPurchase(req, res) {
    const userId = res.locals.user;
    const user = await UserModel.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });
    const { addressId, productId } = req.body;
    const address = await AddressModel.findByPk(addressId);
    if (address?.userId === Number(userId)) {
      productId.map(async (product) => {
        await PurchaseModel.create({
          userId: userId,
          zipcode: address.zipcode,
          street: address.street,
          number: address.number,
          productId: product,
        });
      });
      return { user, address };
    } else {
      return res.status(400).json({ error: " address id or user id invalid" });
    }
  },
};

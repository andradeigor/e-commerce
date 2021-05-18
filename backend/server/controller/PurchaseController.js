const PurchaseService = require("../../database/services/PurchaseService");

module.exports = {
  async createPurchase(req, res) {
    const Purchase = await PurchaseService.createPurchase(req, res);
    res.json({
      data: Purchase,
    });
  },
};

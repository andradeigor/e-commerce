const PurchaseService = require("../../database/services/PurchaseService");
const Mail = require("../lib/Mail");
module.exports = {
  async createPurchase(req, res) {
    const Purchase = await PurchaseService.createPurchase(req, res);
    res.send();
  },
};

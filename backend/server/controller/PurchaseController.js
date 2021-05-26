const PurchaseService = require("../../database/services/PurchaseService");
const PurchaseQueue = require("../lib/Queue");
module.exports = {
  async createPurchase(req, res) {
    const Purchase = await PurchaseService.createPurchase(req, res);
    if (Purchase) {
      await PurchaseQueue.add({ Purchase });
    }
    res.send();
  },
};

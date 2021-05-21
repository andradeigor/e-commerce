const PurchaseService = require("../../database/services/PurchaseService");
const Mail = require("../lib/Mail");
module.exports = {
  async createPurchase(req, res) {
    const Purchase = await PurchaseService.createPurchase(req, res);
    Mail.sendMail({
      from: `Igor de Andrade < ${process.env.MAIL_USER}>`,
      to: `Igor de Andrade < ${process.env.MAIL_USER}>`,
      subject: "olá",
      html: "olá",
    }).then(() => res.send());
  },
};

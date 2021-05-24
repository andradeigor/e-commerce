const Mail = require("../lib/Mail");

module.exports = {
  key: "PurchaseMail",
  async handle({ data }) {
    const { user, purchaseData } = data;
    await Mail.sendMail({
      from: `Igor de Andrade < ${process.env.MAIL_USER}>`,
      to: `${user.name} < ${user.email}>`,
      subject: "Compra ná e-commerce",
      html: `Obrigado por comprar conosco, abaixo segue a lista de produdos comprados ${purchaseData}`,
    });
  },
};

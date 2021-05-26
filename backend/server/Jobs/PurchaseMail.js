const Mail = require("../lib/Mail");

module.exports = {
  key: "PurchaseMail",
  async handle({ data }) {
    const user = data.Purchase.user;
    const address = data.Purchase.address;
    console.log(user, address);
    await Mail.sendMail({
      from: `Igor de Andrade < ${process.env.MAIL_USER}>`,
      to: `${user.name} < ${user.email}>`,
      subject: "Compra ná e-commerce",
      html: `Obrigado por comprar conosco, o pedido será entregue para a você em na rua ${address.street}, no numero ${address.number}`,
    });
  },
};

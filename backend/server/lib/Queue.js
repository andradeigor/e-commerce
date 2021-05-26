const Bull = require("bull");
const redisConfig = require("../../database/config/redis");

const PurchaseMail = require("../Jobs/PurchaseMail");

const PurchaseQueue = new Bull(PurchaseMail.key, redisConfig);

module.exports = PurchaseQueue;

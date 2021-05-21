const redisConfig = require("../../database/config/redis");

module.exports = {
  name: "PurchaseMail",
  options: {
    redis: redisConfig,
  },
};

const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  async decript(token) {
    const id = await jwt.verify(token, process.env.SECRET);
    return id;
  },
  async encrypt(id) {
    return jwt.sign(id, process.env.SECRET);
  },
};

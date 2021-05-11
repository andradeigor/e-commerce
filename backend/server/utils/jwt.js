const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  async decript(token) {
    try {
      const id = await jwt.verify(token, process.env.SECRET);

      return id;
    } catch (error) {
      res.send(401);
    }
  },
  async encrypt(id) {
    return jwt.sign(id, process.env.SECRET);
  },
};

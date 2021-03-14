const bcrypt = require("bcrypt");

module.exports = {
  async encrypt(password) {
    const hashedPassword = await bcrypt.hashSync(password, 10);
    return hashedPassword;
  },
};

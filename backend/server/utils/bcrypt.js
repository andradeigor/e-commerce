const bcrypt = require("bcrypt");

module.exports = {
  async encrypt(password) {
    const hashedPassword = await bcrypt.hashSync(password, 10);
    return hashedPassword;
  },
  async decript(password, hashedPassword) {
    const login = await bcrypt.compare(password, hashedPassword);
    return login;
  },
};

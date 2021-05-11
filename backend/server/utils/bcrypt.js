const bcrypt = require("bcrypt");

module.exports = {
  async encrypt(password) {
    const hashedPassword = await bcrypt.hashSync(password, 10);
    return hashedPassword;
  },
  async decript(password, hashedPassword) {
    await bcrypt.compare(password, hashedPassword, (err, res) => {
      if (err) {
        console.log(err);
      }
      return res;
    });
  },
};

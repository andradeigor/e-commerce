const faker = require("faker/locale/pt_BR");

module.exports = {
  registerFakeData() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
    };
  },
};



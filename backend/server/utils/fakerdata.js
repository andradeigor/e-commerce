const faker = require("faker/locale/pt_BR");

module.exports = {
  registerFakeData() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
    };
  },
  async addressesFakeData() {
    return {
      zipcode: faker.address.zipCode(),
      street: faker.address.streetName(),
      number: faker.random.number(50),
    };
  },
};

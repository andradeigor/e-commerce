const AddressService = require("../../database/services/AddressService");

module.exports = {
  async createAddress(req, res) {
    const address = await AddressService.createAddress(req, res);
    return res.json(address);
  },
  async listAddresses(req, res) {
    const addresses = await AddressService.listAddresses(req, res);
    return res.json(addresses);
  },
  async listAddressesFromUser(req, res) {
    const addresses = await AddressService.listAddressesFromUser(req, res);
    return res.json(addresses);
  },
  async listAddressFromUser(req, res) {
    const address = await AddressService.listAddressFromUser(req, res);
    return res.json(address);
  },
  async updateAddress(req, res) {
    const updatedAddress = await AddressService.updateAddress(req, res);
    return res.json(updatedAddress);
  },
  async deleteAddress(req, res) {
    await AddressService.deleteAddress(req, res);
  },
};

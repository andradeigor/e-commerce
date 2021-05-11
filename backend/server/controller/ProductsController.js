const ProductService = require("../../database/services/ProductService");

module.exports = {
  async createProduct(req, res) {
    const Product = await ProductService.createProduct(req, res);
    return res.json(Product);
  },
  async listProducts(req, res) {
    const Products = await ProductService.listProducts(req, res);
    return res.json(Products);
  },
  async listONEProduct(req, res) {
    const Product = await ProductService.listONEProduct(req, res);
    return res.json(Product);
  },
  async updateProduct(req, res) {
    const updatedProduct = await ProductService.updateProduct(req, res);
    return res.json(updatedProduct);
  },
  async deleteProduct(req, res) {
    const productdeleted = await ProductService.deleteProduct(req, res);
    return res.json(productdeleted);
  },
};

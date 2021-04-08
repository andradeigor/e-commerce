const ProductModel = require("../models/ProductModel");

module.exports = {
  async createProduct(req, res) {
    const { title, price, subtitle, imagePath } = req.body;
    const Product = await ProductModel.create({
      title,
      price,
      subtitle,
      imagePath,
    });
    return Product;
  },
  async listProducts(req, res) {
    return await ProductModel.findAll();
  },
  async listONEProduct(req, res) {
    return (Product = await ProductModel.findByPk(req.params.id));
  },
  async updateProduct(req, res) {
    const { title, price, subtitle, imagePath } = req.body;
    await ProductModel.update({ title }, { where: { id: req.params.id } });
    await ProductModel.update({ price }, { where: { id: req.params.id } });
    await ProductModel.update({ subtitle }, { where: { id: req.params.id } });
    await ProductModel.update({ imagePath }, { where: { id: req.params.id } });
    return ProductModel.findByPk(req.params.id);
  },
  async deleteProduct(req, res) {
    return ProductModel.destroy({ where: { id: req.params.id } });
  },
};

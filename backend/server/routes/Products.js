const express = require("express");
const ProductController = require("../controller/ProductsController");
const router = express.Router();

router.get("/", ProductController.listProducts);
router.get("/:id", ProductController.listONEProduct);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;

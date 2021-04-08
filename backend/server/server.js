const express = require("express");
const UserRouter = require("./routes/User");
const AddressRouter = require("./routes/Address");
const ProductsRouter = require("./routes/Products");
require("../database/index");
const app = express();

app.use(express.json());
app.use("/", UserRouter);
app.use("/users/", AddressRouter);
app.use("/admin/products/", ProductsRouter);

app.listen(5000, () => {
  console.log("hi, I'm up");
});

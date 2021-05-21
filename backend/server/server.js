require("dotenv").config();
const express = require("express");
var cors = require("cors");
const UserRouter = require("./routes/User");
const AddressRouter = require("./routes/Address");
const ProductsRouter = require("./routes/Products");
const AuthRouter = require("./routes/Auth");
const PurchaseRouter = require("./routes/Purchase");
require("../database/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users/", UserRouter);
app.use("/address/", AddressRouter);
app.use("/admin/products/", ProductsRouter);
app.use("/auth", AuthRouter);
app.use("/purchase", PurchaseRouter);
app.listen(5000, () => {
  console.log("hi, I'm up");
});

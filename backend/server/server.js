const express = require("express");
var cors = require("cors");
const UserRouter = require("./routes/User");
const AddressRouter = require("./routes/Address");
const ProductsRouter = require("./routes/Products");
const AuthRouter = require("./routes/Auth");
require("../database/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", UserRouter);
app.use("/users/", AddressRouter);
app.use("/admin/products/", ProductsRouter);
app.use("/auth", AuthRouter);

app.listen(5000, () => {
  console.log("hi, I'm up");
});

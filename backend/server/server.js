const express = require("express");
const UserRouter = require("./routes/User");
const AddressRouter = require("./routes/Address");
require("../database/index");
const app = express();

app.use(express.json());
app.use("/users/", AddressRouter);
app.use("/", UserRouter);

app.listen(5000, () => {
  console.log("hi, I'm up");
});

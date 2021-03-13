const express = require("express");
const router = require("./routes/User");
require("../database/index");
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(5000, () => {
  console.log("hi, I'm up");
});

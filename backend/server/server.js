const express = require("express");
const routes = require("./routes/User");
require("../database/index");
const app = express();
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log("hi, I'm up");
});

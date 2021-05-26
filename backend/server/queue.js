require("dotenv").config();
const PurchaseQueue = require("./lib/Queue");
const PurchaseMail = require("./Jobs/PurchaseMail");

PurchaseQueue.process(PurchaseMail.handle);

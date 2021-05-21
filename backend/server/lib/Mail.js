const nodemailer = require("nodemailer");
const mailConfig = require("../config/Mail");

module.exports = nodemailer.createTransport(mailConfig);

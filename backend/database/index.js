const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const UserModel = require("./models/UserModel");

const connection = new Sequelize(dbConfig);

UserModel.init(connection);
module.exports = connection;

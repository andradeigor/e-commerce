const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const UserModel = require("./models/UserModel");
const AdressModel = require("./models/AddressModel");

const connection = new Sequelize(dbConfig);

UserModel.init(connection);
AdressModel.init(connection);

AdressModel.associate(connection.models);

module.exports = connection;

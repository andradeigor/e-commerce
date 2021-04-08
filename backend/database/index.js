const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const UserModel = require("./models/UserModel");
const AdressModel = require("./models/AddressModel");
const ProductMoldel = require("./models/ProductModel");

const connection = new Sequelize(dbConfig);

UserModel.init(connection);
AdressModel.init(connection);
ProductMoldel.init(connection);
AdressModel.associate(connection.models);

module.exports = connection;

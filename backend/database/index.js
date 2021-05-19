const Sequelize = require("sequelize");
const dbConfig = require("./config/database");

const UserModel = require("./models/UserModel");
const AdressModel = require("./models/AddressModel");
const ProductMoldel = require("./models/ProductModel");
const PurchaseModel = require("./models/PurchaseModel");
const connection = new Sequelize(dbConfig);

UserModel.init(connection);
AdressModel.init(connection);
AdressModel.associate(connection.models);
ProductMoldel.init(connection);
PurchaseModel.init(connection);

module.exports = connection;

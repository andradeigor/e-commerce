const { Model, DataTypes } = require("sequelize");

class Purchase extends Model {
  static init(connection) {
    super.init(
      {
        userId: DataTypes.INTEGER,
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = Purchase;

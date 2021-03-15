const { Model, DataTypes } = require("sequelize");
// O model vai criar quando requisitado a conexão com o banco de dados
// ele é uma classe que extende o Model do sequelize e dentro do super(classe pai) init
// você passa as colunas da tabela que criou
// e no segundo argumento do init você passa a conexão com o banco que a gente cria no index.js da database
class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = User;

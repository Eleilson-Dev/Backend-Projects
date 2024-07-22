const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.UserImages, { foreignKey: 'user_id', as: 'images' });
  }
}

module.exports = User;

const { Model, DataTypes } = require('sequelize');

class UserImages extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        src: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'users-images',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = UserImages;

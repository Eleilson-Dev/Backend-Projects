const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User.model');
const UserImages = require('../models/UserImages.model');

const connection = new Sequelize(dbConfig);

const startServer = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

User.init(connection);
UserImages.init(connection);

User.associate(connection.models);
UserImages.associate(connection.models);

module.exports = connection;

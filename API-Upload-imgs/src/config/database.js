require('dotenv').config();

module.exports = {
  dialect: process.env.PG_DIALECT,
  host: process.env.PG_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};

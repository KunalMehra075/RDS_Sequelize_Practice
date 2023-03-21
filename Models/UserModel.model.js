const Sequelize = require("sequelize");
const { connection } = require("../Config/db");

const UserModel = connection.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = { UserModel };

const Sequelize = require("sequelize");
const { connection } = require("../Config/db");

const OrderModel = connection.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "CONFIRMED",
  },
});
module.exports = { OrderModel };

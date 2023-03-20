const { OrderModel } = require("../Models/OrderModel.model");

const orderRouter = require("express").Router();

orderRouter.get("/", async (req, res) => {
  try {
    const Data = await OrderModel.findAll();
    res.json({ Message: "Welcome to Order Route", Data });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

module.exports = { orderRouter };

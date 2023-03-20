const express = require("express");
const { UserModel } = require("../Models/UserModel.model");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const Data = await UserModel.findAll();
    res.json({ Message: "Welcome to User Route", Data });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

module.exports = { userRouter };

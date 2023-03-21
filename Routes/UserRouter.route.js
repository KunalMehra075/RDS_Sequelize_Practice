const express = require("express");
const { UserModel } = require("../Models/UserModel.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

userRouter.post("/register", async (req, res) => {
  let { email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.json({ Err: err });
      } else {
        await UserModel.create({ email, password: hash });
        res.json({ Message: "User Created" });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});
userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ where: { email: email } });
    if (user) {
      console.log(password, user.dataValues);
      bcrypt.compare(
        password,
        user.dataValues.password,
        function (err, result) {
          if (result) {
            var token = jwt.sign({ email }, "secretkey");
            res.json({ Message: "Login Successful", token });
          } else {
            res.json({ Message: "Wrong Credentials" });
          }
        }
      );
    } else {
      res.json({ Message: "No User Found" });
    }
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

module.exports = { userRouter };

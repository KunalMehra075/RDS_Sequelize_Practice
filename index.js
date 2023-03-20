const { connection } = require("./Config/db");
const { orderRouter } = require("./Routes/OrderRouter.route");
const { userRouter } = require("./Routes/UserRouter.route");
const express = require("express");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  try {
    res.json({ Message: "Welcome to Sequelize App" });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

app.listen(4500, async () => {
  try {
    await connection.sync();
    console.log("Connected to SQL DB");
  } catch (err) {
    console.log("Error connecting to DB");
  }
  console.log(`Server is Rocking on port ${4500}`);
});

const app = require("express")();

app.get("/", (req, res) => {
  try {
    res.json({ Message: "Welcome to Sequelize App" });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

app.listen(4500, () => {
  console.log("Server Running in port 4500");
});

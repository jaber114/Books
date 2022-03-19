const express = require("express");
var mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 8000;
var users = require("./router/users.rout");
var cart = require("./router/cart.rout");
var products = require("./router/products.rout");
var mongoDB = "mongodb://localhost:27017/old_scroll";
mongoose.connect(mongoDB, { useNewUrlParser: true });
app.use(cors());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use("/api", products);
app.use("/api", cart);
app.use("/api", users);
app.use(express.static(path.join(__dirname, "dist/angular_sof")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular_sof/index.html"));
});
app.listen(port, () => console.log("server started at port", port));

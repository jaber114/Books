const mongoose = require("mongoose");
let user = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("users", user);

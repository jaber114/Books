const mongoose = require("mongoose");
let products = new mongoose.Schema(
  {
    SerialNumber: {
      type: Number,
    },
    Name: {
      type: String,
    },
    Price: {
      type: Number,
    },
    category: {
      type: String,
    },
    Description: {
      type: String,
    },
    imgurl: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    collection: "product",
  }
);
module.exports = mongoose.model("product", products);

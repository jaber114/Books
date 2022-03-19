const mongoose = require("mongoose");
let Cart = new mongoose.Schema(
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
    collection: "cart",
  }
);
module.exports = mongoose.model("cart", Cart);

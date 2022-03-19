var express = require("express");
var router = express.Router();
let cart = require("../Models/cart");
router.get("/get_all_from_cart", (req, res) => {
  cart.find({}, (error, data) => {
    console.log(data);
    res.json(data);
  });
});
//
router.get("/getbyemail/:name", (req, res) => {
  cart.find({ name: req.params.name }, (error, data) => {
    console.log(data);
    res.json(data);
  });
});
//
router.get("/get_pointer_item/:SerialNumber", (req, res) => {
  console.log("hey");
  console.log(req.params.SerialNumber);
  cart.find({ SerialNumber: req.params.SerialNumber }, (error, data) => {
    console.log(data);
    res.json(data);
  });
});
router.post("/add_to_cart", (req, res) => {
  cart.create(req.body, (error, data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;

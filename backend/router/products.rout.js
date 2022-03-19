var express = require("express");
var router = express.Router();
let product = require("../Models/products");
router.get("/getallproducts", (req, res) => {
  product.find({}, (error, data) => {
    res.json(data);
  });
});
router.get("/get_by_id/:SerialNumber", (req, res) => {
  product.find({ SerialNumber: req.params.SerialNumber }, (error, data) => {
    res.json(data);
  });
});
module.exports = router;

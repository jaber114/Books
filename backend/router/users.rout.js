var express = require("express");
var router = express.Router();
let user = require("../Models/users");
router.post("/create_newuser", (req, res) => {
  user.create(req.body, (error, data) => {
    res.json(data);
  });
});
router.get("/get_user", (req, res) => {
  user.find({}, (error, data) => {
    console.log(data);
    res.json(data);
  });
});
router.get("/get_user/:email", (req, res) => {
  user.find({ email: req.params.email }, (error, data) => {
    res.json(data);
  });
});
module.exports = router;

var mongoose = require("mongoose");
var passport = require("passport");
var settings = require("../config/settings");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var Professional = require("../models/Professional");

router.post("/register", function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, msg: "Please pass email and password." });
  } else {
    var temp = false;
    if (req.body.certification == "yes") {
      temp = true;
    }
    var newUser = new Professional({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      phone: req.body.phone,
      birthday: new Date(req.body.dob),
      professionalTitles: req.body.titles,
      yearsInPos: req.body.yearsInPos,
      certification: temp,
      biography: req.body.bio
    });
    // save the user
    newUser.save(function(err) {
      console.log(newUser);
      if (err) {
        return res.json({ success: false, msg: "email already exists." });
      }
      res.json({ success: true, msg: "Successful created new Professional." });
    });
  }
});

/* GET ALL ProfessionalS */
router.get("/currentUser", function(req, res, next) {
  Professional.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post("/login", function(req, res) {
  Professional.findOne(
    {
      email: req.body.email
    },
    function(err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. Professional not found."
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({ success: true, token: "JWT " + token });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong password."
            });
          }
        });
      }
    }
  );
});

module.exports = router;

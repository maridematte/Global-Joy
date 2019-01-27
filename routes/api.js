// var express = require("express");
// var router = express.Router();
// var mongoose = require("mongoose");
// var Professional = require("../models/Professional.js");
//
// /* GET ALL ProfessionalS */
// router.get("/", function(req, res, next) {
//   Professional.find(function(err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });
//
// /* GET SINGLE Professional BY ID */
// router.get("/:id", function(req, res, next) {
//   Professional.findById(req.params.id, function(err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* SAVE Professional */
// router.post("/", function(req, res, next) {
//   Professional.create(req.body, function(err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* UPDATE Professional */
// router.put("/:id", function(req, res, next) {
//   Professional.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// /* DELETE Professional */
// router.delete("/:id", function(req, res, next) {
//   Professional.findByIdAndRemove(req.params.id, req.body, function(err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// module.exports = router;

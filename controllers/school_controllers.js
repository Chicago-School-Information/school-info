// requirements
var express = require("express");
var router = express.Router();
var db = require("../models");

// temporary route
router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;
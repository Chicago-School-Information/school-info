// requirements
var express = require("express");
var router = express.Router();
var db = require("../models");
var maps = require("./maps");

// temporary route
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/MAP", function(req,res) {
    // initMap();
    res.render("mapExp");

})

module.exports = router;
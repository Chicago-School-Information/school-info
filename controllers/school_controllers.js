// requirements
var express = require("express");
var router = express.Router();
var db = require("../models");
<<<<<<< HEAD
// var maps = require("./maps");
=======
>>>>>>> master

// temporary route
router.get("/", function(req, res) {
    res.render("index");
});


//currently this prints the schools where the zips match. 
//so i need a way to display this data in the index-2 template. 
// could maybe even do a join here with the alderman table to include alderman information
router.get("/api/:zip", function(req,res){
    // res.render("index-2");
    db.School.findAll({
        where: {
            zipcode: req.params.zip
        },
        // linking to the alderman db to display alderman contact information - 
        include: [db.Alderman]
    }).then(function(schools){
        res.json(schools);
        console.log(res.json(schools));
    })
})


router.get("/2", function(req, res) {
    res.render("index-2");
});

module.exports = router;
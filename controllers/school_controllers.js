// requirements
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

// homepage route
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html")
)});

// gets the schools where the zips match the user's zip search & joins with relevent alderman info
router.get("/api/:zip", function(req,res){
    db.School.findAll({
        where: {
            zipcode: req.params.zip
        },
        // linking to the alderman db to display alderman contact information - 
        include: [db.Alderman]
    }).then(function(schools){
        hbsObject = {schools:schools}
        res.json(hbsObject);
    })
})

// adding new petitions to the petition database
router.post("/api/petition", function(req, res) {
        db.Petition.create(req.body).then(function(dbPetition) {
        res.json(dbPetition);
        });
      });
 
// getting the number of signatures for a particular ward (entered by the user when they sign)
router.get("/api/petition/:ward", function(req,res){
    db.Petition.count({
        where: {
            ward_id: req.params.ward
        }
    }).then(function(count){
        theCount = {count:count};
        res.json(theCount);
    })
})

module.exports = router;
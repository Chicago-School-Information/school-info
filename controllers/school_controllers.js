// requirements
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

// temporary route
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html")
)});


//currently this prints the schools where the zips match & joins with relevent alderman info
router.get("/api/:zip", function(req,res){
    console.log(req.params);
    // res.render("index-2");
    console.log("post hit");
    db.School.findAll({
        where: {
            zipcode: req.params.zip
        },
        // linking to the alderman db to display alderman contact information - 
        include: [db.Alderman]
    }).then(function(schools){
        hbsObject = {schools:schools}
        console.log(hbsObject);
        res.json(hbsObject);
        // res.json();
        // res.render("partials", hbsObject);
    })
})

router.post("/api/petition", function(req, res) {
        db.Petition.create(req.body).then(function(dbPetition) {
          console.log(req);
          console.log(res);
        res.json(dbPetition);
        });
      });
 


module.exports = router;
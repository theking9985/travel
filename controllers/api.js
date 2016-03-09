var express = require("express");
var router  = express.Router();

// Create all API endpoints. Only POST routes
// 1. user
// 2. preference
// 3. Andrew will pass longitude and latitude to here and I will create route on google map

router.get("/", function(req, res){
	res.send("hi Api");
});

// Create new user on Mongo using uid

// POST route to edit a user's preference
router.post("/profile/:firebaseId/edit", function(req, res) {

});
	
// POST route for route on google map; then pass it to Phil's front ends
router.get("/route", function(req, res) {
	res.render("route");
});

module.exports = router;

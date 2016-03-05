var express = require("express");
var router  = express.Router();

// Create all API endpoints. Only POST routes
// 1. user
// 2. preference
// 3. Andrew will pass longitude and latitude to here and I will create route on google map

router.get("/", function(req, res){
	res.send("hi Api");
});

// GET route to display info of a user
router.get("/profile", function(req, res) {
	res.render("api/profile");
});

// GET & POST route to edit a user
router.route("/profile/:firebaseId/edit")
	.get(function(req, res) {
		res.render("edit");
	})
	.post(function(req, res) {

	});

// GET route for route on google map
router.get("/route", function(req, res) {
	res.render("route");
});

module.exports = router;

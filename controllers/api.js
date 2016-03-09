var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
	res.send("hi Api");
});

router.get("/yelp", function(req, res) {
	//var yelpData = yelp.search({type: 'food', location: 'Seattle'});
	//res.send(yelpData);
	res.send("testing");
});

module.exports = router;

var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var ejsLayout = require("express-ejs-layouts");
var api = require("./controllers/api");
var mongoose = require('mongoose');


app.use(express.static(__dirname + "/static"));
app.use(ejsLayout);
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine", "ejs");


app.use("/api", api);

app.get('/', function(req, res){
  res.send('main page');
});

app.listen(3000);
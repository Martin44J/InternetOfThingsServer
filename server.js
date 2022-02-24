const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");

var command = "";

app.get("/", function(req, res){
  res.send({command: command})
});

app.post("/", function(req,res){
  command = req.query.command;
  res.status(200).json({success: "true", command: command})
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Starting server on Port 3000");
});

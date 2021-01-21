const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.listen(3000);
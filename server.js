const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/style.css")
})

app.post("/results", function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight / Math.pow(height, 2);
    const results = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BMI Calculator by Will</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="bmi">
            <header>
                <h1>Results</h1>
            </header>
            <div class="container">
                <p>Your BMI is <span id="bmi-result">`+ bmi + `</span></p>
            </div>
        </div>
    </body>
    </html>`;
    res.send(results);
});

app.listen(3000);
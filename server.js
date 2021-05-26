const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.route("/")
    .get((req, res) => {
        res.render("home");
    });

app.route("/places")
    .get((req, res) => {
        res.render("places");
    });

app.get("/places/andhra/:place", (req, res) => {
    const place = req.params.place;
    res.render("andhra", {place: place});
});

app.route("/PlanATrip")
    .get((req, res) => {
        res.render("PlanATrip");
    });

app.route("/about")
    .get((req, res) => {
        res.render("about");
    });

app.route("/login")
    .get((req, res) => {
        res.render("login");
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});
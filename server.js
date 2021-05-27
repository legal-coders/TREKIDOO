const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Home/home");
});

app.get("/places", (req, res) => {
    res.render("Places/places");
});

app.get("/places/:state/:place", (req, res) => {
    const place = req.params.place;
    const state = req.params.state;
    res.render(`Places/${state}`, { place: place });
});

app.get("/404", ((req, res) => {
    res.render("404/404");
}))

app.get("/PlanATrip", (req, res) => {
    res.render("PlanATrip/PlanATrip");
});

app.get("/PlanATrip/:place", (req, res) => {
    const place = req.params.place;
    res.render(`PlanATrip/${place}`);
})

app.route("/about")
    .get((req, res) => {
        res.render("About/about");
    });

app.route("/login")
    .get((req, res) => {
        res.render("Login/login");
    });

app.route("/forget")
    .get((req, res) => {
        res.render("Login/forget");
    });

app.route("/register")
    .get((req, res) => {
        res.render("Login/register");
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});
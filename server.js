require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://admin:projectpirates2020@trekidoo.mxbfu.mongodb.net/userDB", { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String,
    signedin: String
});

const User = mongoose.model("User", userSchema);

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

app.get("/404", (req, res) => {
    res.render("404/404");
});

app.get("/PlanATrip", (req, res) => {
    res.render("PlanATrip/PlanATrip");
});

app.get("/PlanATrip/:place", (req, res) => {
    const place = req.params.place;
    res.render(`PlanATrip/${place}`);
});

app.get("/about", (req, res) => {
    res.render("About/about");
});

app
    .route("/login")
    .get((req, res) => {
        res.render("Login/login", { wrongPassword: "" });
    })
    .post((req, res) => {
        User.findOne({ email: req.body.email }, (err, foundUser) => {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === md5(req.body.password)) {
                        res.render("Home/home");
                    } else {
                        res.render("Login/login", {
                            wrongPassword: "E-mail or Password is incorrect!",
                        });
                    }
                } else {
                    res.render("Login/login", {
                        wrongPassword: "E-mail or Password is incorrect!",
                    });
                }
            }
        });
    });

app
    .route("/forget")
    .get((req, res) => {
        res.render("Login/forget", { wrongPassword: "" });
    })
    .post((req, res) => {
        User.findOne({ email: req.body.email }, (err, foundUser) => {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (req.body.newpassword === req.body.confirmpassword) {
                        User.updateOne(
                            { email: req.body.email },
                            { $set: { password: md5(req.body.newpassword) } },
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        );
                        res.redirect("/login");
                    } else {
                        res.render("Login/forget", {
                            wrongPassword: "E-mail or Password is incorrect!",
                        });
                    }
                    
                } else {
                    res.render("Login/forget", {
                        wrongPassword: "E-mail or Password is incorrect!",
                    });
                }
            }
        });
    });

app
    .route("/register")
    .get((req, res) => {
        res.render("Login/register", { wrongPassword: "" });
    })
    .post((req, res) => {
        const confirmpassword = req.body.confirmpassword;
        const password = req.body.password;


        if (password === confirmpassword) {
            const newUser = new User({
                email: req.body.email,
                userName: req.body.username,
                password: md5(password)
            });
            newUser.save();
            res.redirect("/");
        } else {
            res.render("Login/register", {
                wrongPassword: "*Password does not match!",
            });
        }
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});

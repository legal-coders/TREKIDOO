require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("Home/home", {log: "Account"});
    } else {
        res.render("Home/home", {log: "Sign In"});
    }
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
                    if (foundUser.password === req.body.password) {
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
                            { $set: { password: req.body.newpassword } },
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
        User.register({email: req.body.email}, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                passport.authenticate("local") (req, res, () => {
                    res.redirect("/");
                });
            }
        });
        // const confirmpassword = req.body.confirmpassword;
        // const password = req.body.password;


        // if (password === confirmpassword) {
        //     const newUser = new User({
        //         email: req.body.email,
        //         userName: req.body.username,
        //         password: password
        //     });
        //     newUser.save();
        //     res.redirect("/");
        // } else {
        //     res.render("Login/register", {
        //         wrongPassword: "*Password does not match!",
        //     });
        // }
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});
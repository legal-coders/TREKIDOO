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
        res.render("Home/home", { log: "Account" });
    } else {
        res.render("Home/home", { log: "Sign In" });
    }
});

app.get("/places", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("Places/places", { log: "Account" });
    } else {
        res.render("Places/places", { log: "Sign In" });
    }
});

app.get("/places/:state/:place", (req, res) => {
    const place = req.params.place;
    const state = req.params.state;
    res.render(`Places/${state}`, { place: place });
});

app.get("/404", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("404/404", { log: "Account" });
    } else {
        res.render("404/404", { log: "Sign In" });
    }
});

app.get("/PlanATrip", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("PlanATrip/PlanATrip", { log: "Account" });
    } else {
        res.render("PlanATrip/PlanATrip", { log: "Sign In" });
    }
});

app.get("/PlanATrip/:place", (req, res) => {
    const place = req.params.place;
    if (req.isAuthenticated()) {
        res.render(`PlanATrip/${place}`, { log: "Account" });
    } else {
        res.render(`PlanATrip/${place}`, { log: "Sign In" });
    }
});

app.get("/about", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("About/about", { log: "Account" });
    } else {
        res.render("About/about", { log: "Sign In" });
    }
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app
    .route("/login")
    .get((req, res) => {
        if (req.isAuthenticated()) {
            res.render("Account/account", { log: "Account", });
        } else {
            res.render("Login/login", { log: "Sign In", wrongPassword: "" });
        }
    })
    .post((req, res) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        User.findOne({ username: req.body.username }, (err, foundUser) => {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    console.log(foundUser.password);
                    if (foundUser.password == req.body.password) {
                        
                        req.login(user, (err) => {
                            if (err) {
                                console.log(err);
                        } else {
                            passport.authenticate("local")(req, res, () => {
                                res.redirect("/");
                            });
                        };                
                        });
                    } else {
                        res.render("Login/login", { log: "Sign In", wrongPassword: "Username or password is incorrect!" });
                    }
                }
            }
        });
    });

app
    .route("/forget")
    .get((req, res) => {
        if (req.isAuthenticated()) {
            res.render("Login/forget", { log: "Account", wrongPassword: "" });
        } else {
            res.render("Login/forget", { log: "Sign In", wrongPassword: "" });
        }
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
        res.render("Login/register", { log: "Sign In", wrongPassword: "" });
    })
    .post((req, res) => {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if (password == confirmpassword) {
            User.register({ email: email, username: username }, password, (err, user) => {
                if (err) {
                    console.log(err);
                    res.render("Login/register", { log: "Sign In", wrongPassword: "E-mail or Password is incorrect!" });
                } else {
                    passport.authenticate("local")(req, res, () => {
                        res.redirect("/");
                    });
                }
            });
        } else {
            res.render("Login/register", { log: "Sign In", wrongPassword: "E-mail or Password is incorrect!" });
        }
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});
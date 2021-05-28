const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
// const userSchema = new mongoose.Schema({
//     email: String,
//     userName: String,
//     password: String,
//     confirmpassword: String
// });
// const User = mongoose.model("User", userSchema);

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
        res.render("Login/login", { wrongPassword: "" });
    })
    .post((req, res) => {
        User.findOne({ email: req.body.email }, (err, foundUser) => {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === req.body.password) {
                        res.redirect("/");
                    } else {
                        res.render("Login/login", { wrongPassword: "E-mail or Password is incorrect!" });
                    }
                } else {
                    res.render("Login/login", { wrongPassword: "E-mail or Password is incorrect!" });
                }
            }
        });
    });

app.route("/forget")
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
                        User.updateOne({email: req.body.email}, {$set: {password: req.body.newpassword}}, (err) => {
                            if(err) {
                                console.log(err);
                            }
                        });
                        res.redirect("/login");
                    } else {
                        res.render("Login/forget", { wrongPassword: "E-mail or Password is incorrect!" });
                    }
                } else {
                    res.render("Login/forget", { wrongPassword: "E-mail or Password is incorrect!" });
                }
            }
        });
    });

app.route("/register")
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
                password: password
            });
            newUser.save();
            User.findOne({
                email: "legalpirates2020@gmail.com"
            }, (err, found) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(found.userName);
                }
            });
            res.redirect("/");
        } else {
            res.render("Login/register", { wrongPassword: "*Password does not match!" });
        }
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running on port 3000...");
});
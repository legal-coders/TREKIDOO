require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const rn = require("random-number");
const nodemailer = require("nodemailer");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  userName: String,
  password: String,
  googleId: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "https://morning-bastion-77873.herokuapp.com/auth/google/trekidoo",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// let options = {
//   min: 100000,
//   max: 999999,
//   integer: true
// };

// let OTP = rn(options);
// console.log(OTP)

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("Home/home", { log: "Account" });
  } else {
    res.render("Home/home", { log: "Sign In" });
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/trekidoo",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

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
  if (req.isAuthenticated()) {
    res.render(`Places/${state}`, { place: place, log: "Account" });
  } else {
    res.render(`Places/${state}`, { place: place, log: "Sign In" });
  }
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
    res.render("PlanATrip/PlanATrip", { log: "Account", signedin: "" });
  } else {
    res.render("PlanATrip/PlanATrip", { log: "Sign In", signedin: "signedin" });
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
      res.render("Account/account", { log: "Account" });
    } else {
      res.render("Login/login", { log: "Sign In", wrongPassword: "" });
    }
  })
  .post((req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    req.login(user, err => {
      if (err) {
        console.log(err);
      } else {
        User.findOne({ username: req.body.username }, (err, foundUser) => {
          if (err) {
            console.log(err);
          } else {
            if (foundUser) {
              passport.authenticate("local")(req, res, () => {
                res.redirect("/");
              });
            } else {
              res.render("Login/login", {
                log: "Sign In",
                wrongPassword: "Incorrect Username or Password!",
              });
            }
          }
        });
      }
    });
  });

app.route("/contact")
    .get((req, res) => {})
    .post((req,res) =>{
      const email = req.body.mail;
      const comment = req.body.comment;
      console.log(email);
      console.log(comment);
      
      let mailOptions = {
          from: "trekidoolegalpirates@gmail.com",
          to: "legalpirates2020@gmail.com",
          subject: "Comments from user",
          html: `<h2> ${email} </h2>` +`<p>${comment}</p>`
      };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        res.redirect("/about");
});



// app.get("/forget", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.render("Login/forget", { log: "Account", wrongPassword: "", otp: "" });
//   } else {
//     res.render("Login/forget", { log: "Sign In", wrongPassword: "", otp: "" });
//   }
// });
// app.post("/forget", (req, res) => {
//   if (OTP == req.body.otp) {
//     res.redirect("/");
//   }
//   console.log(OTP);
//   console.log(req.body.otp);
// });
// app.route("/otp")
//   .get((req, res) => {
//     res.redirect("/forget");
//   })
//   .post((req, res) => {
//     const email = req.body.email;
//     User.findOne({ email: email }, (err, foundUser) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (foundUser) {
//           let mailOptions = {
//             from: "trekidoolegalpirates@gmail.com",
//             to: email,
//             subject: "Password reset for your account",
//             html:
//               "<h1>Welcome to Trekidoo</h1><p> Here is your OTP to change password</p>" +
//               OTP +
//               "<p>Dont share this with anyone</p>",
//           };
//           transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//               console.log(error);
//             } else {
//               console.log("Email sent: " + info.response);
//               res.write("your password is wrong");
//             }
//           });
//         } else {
//           res.send("hi");
//         }
//       }
//     });
//   });
// app.route("/next")
//   .get((req, res) => {})
//   .post((req, res) => {
//     const otpo = req.body.otp;
//     if (OTP == otpo) {
//       res.render("Login/forget", {
//         log: "Sign In",
//         wrongPassword: "",
//         otp: "otped",
//       });
//     } else {
//       res.redirect("/forget");
//     }
//   });
// app
//   .route("/forgetpassword")
//   .get((req, res) => {})
//   .post((req, res) => {
//     const password1 = req.body.newpassword;
//     const password2 = req.body.confirmpassword;
//     const email = req.body.email;
//     if (req.isUnauthenticated()) {
//     User.findOne({ email: email }, (err, foundUser) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (foundUser) {
//           console.log(foundUser);
//           if (password1 === password2) {
//             // User.updateOne({email: email}, {$set: {password: password1}});
//             console.log(foundUser.password);
//             res.redirect("/");
//           }
//         }
//       }
//     });
//   }
//   });

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

    User.findOne({ email: email }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          res.render("Login/register", {
            log: "Sign In",
            wrongPassword: "Email or Username already exist!",
          });
        } else {
          if (password == confirmpassword) {
            User.register(
              { email: email, username: username },
              password,
              (err, user) => {
                if (err) {
                  console.log(err);
                } else {
                  passport.authenticate("local")(req, res, () => {
                    res.redirect("/");
                  });
                }
              });
          }
        }
      }
    });
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running on port 3000...");
});

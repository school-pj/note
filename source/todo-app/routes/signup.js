const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("signup", {
    title: "Sign up",
    //isAuth: req.isAuthenticated(),
  });
});

router.post('/', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const repassword = req.body.repassword;

  if (password === repassword) {
    knex("users")
      .insert({name: username, password: password})
      .then(function () {
        res.redirect("/");
      })
      .catch(function (err) {
        console.error(err);
        res.render("/", {
          title: "",
          errorMessage: [content],
          isAuth: false,
        });
      });
  } else {
    res.redirect('/signup');
  }
});

module.exports = router;

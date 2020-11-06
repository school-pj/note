const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

router.get('/', function (req, res, next) {
  res.render("signup", {
    title: "Sign up",
    errorMessage: "",
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
        res.render("signup", {
          title: "Sign up",
          errorMessage: [err.sqlMessage],
        });
      });
  } else {
    res.render("signup", {
      title: "Sign up",
      errorMessage: ["Passwords don't match"],
    });
  }
});

module.exports = router;

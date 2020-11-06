const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

router.get('/', function (req, res, next) {
  res.render("signin", {
    title: "Sign in",
    errorMessage: "",
  });
});

router.post('/', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  knex("users")
    .where({
      name: username,
      password: password,
    })
    .select("*")
    .then((results) => {
      if (results.length === 0) {
        console.debug(results);
        res.render("signin", {
          title: "Sign in",
          errorMessage: ["User not found"],
        });
      } else {
        req.session.regenerate((err) => {
          req.session.userid = results[0].id;
          req.session.username = results[0].name;
          res.redirect('/');
        });
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("signin", {
        title: "Sign in",
        errorMessage: [err.sqlMessage],
        isAuth: false,
      });
    });
});

module.exports = router;

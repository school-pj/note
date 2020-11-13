const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const userName = req.session.username;
  const isAuth = !!(userId && userName);
  res.render("signin", {
    title: "Sign in",
    errorMessage: "",
    isAuth: isAuth,
  });
});

router.post('/', function (req, res, next) {
  const userId = req.session.userid;
  const userName = req.session.username;
  const isAuth = !!(userId && userName);
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
          errorMessage: ["ユーザが見つかりません"],
          isAuth: isAuth,
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
        isAuth: isAuth,
      });
    });
});

module.exports = router;

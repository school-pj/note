const express = require('express');
const router = express.Router();
const knex = require("../db/knex");
const bcrypt = require("bcrypt");

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
    })
    .select("*")
    .then(async function(results) {
      const comparedPassword = await bcrypt.compare(password, results[0].password);
      console.log(comparedPassword);
      if (!comparedPassword) {
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
        isAuth: isAuth,
      });
    });
} else {
  res.render("signup", {
    title: "Sign up",
    errorMessage: ["パスワードが一致しません"],
    isAuth: isAuth,
  });
}

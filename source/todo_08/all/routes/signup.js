const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const userName = req.session.username;
  const isAuth = !!(userId && userName);
  res.render("signup", {
    title: "Sign up",
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
  const repassword = req.body.repassword;

  knex("users")
    .where({name: username})
    .select("*")
    .then(function (result) {
      if (result.length !== 0) {
        res.render("signup", {
          title: "Sign up",
          errorMessage: ["このユーザ名は既に使われています"],
          isAuth: isAuth,
        })
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("signup", {
        title: "Sign up",
        errorMessage: [err.sqlMessage],
        isAuth: isAuth,
      });
    });


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
});

module.exports = router;

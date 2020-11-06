const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("signin", {
    title: "Sign in",
    //isAuth: req.isAuthenticated(),
  });
});

router.post('/', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  knex("users")
    .where({name: username})
    .andWhere({password: password})
    .select("*")
    .then((results) => {
      if (results.length === 0) {
        throw new Error("User not found");
      }
      req.session.regenerate((err) => {
        console.debug(results[0].name);
        req.session.username = username;
        console.debug("セッション情報");
        console.debug(req.session.username);
        res.redirect('/');
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render("/", {
        title: "",
        errorMessage: [content],
        isAuth: false,
      });
    });
});

module.exports = router;

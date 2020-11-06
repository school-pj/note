const express = require('express');
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get('/', function (req, res, next) {
  //if (req.isAuthenticated()) {
  let isAuth = false;
  console.debug("セッション情報");
  console.debug(req.session.username);
  if (req.session.username) {
    isAuth = true;
  }
  console.debug("isAuth");
  console.debug(isAuth);
  const userId = 1;
  //const userid = req.session.userid;
  //const username = req.session.username;
  knex("tasks")
    .where({id: userId})
    .select("*")
    .then((results) => {
      if (results.length === 0) {
        throw new Error("User not found");
      } else {
        console.debug(...results);
        res.render("index", {
          results: results,
          title: "",
          isAuth: isAuth,
          //isAuth: req.isAuthenticated(),
        });
      }
    });
});

router.post('/', function (req, res, next) {
  const userId = 1;
  const content = req.body.content;

  let isAuth = false;
  if (req.session.username) {
    isAuth = true;
  }

  knex("tasks")
    .insert({user_id: userId, content: content})
    .then(function () {
      res.redirect("/");
    })
    .catch(function (err) {
      console.error(err);
      res.render("/", {
        title: "",
        errorMessage: [content],
        isAuth: isAuth,
      });
    });

  res.render('index', {title: 'Express'});
});

module.exports = router;

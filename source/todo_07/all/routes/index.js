const express = require('express');
const router = express.Router();
const knex = require("../db/knex");
let isAuth;

router.get('/', function (req, res, next) {
  if (req.session.userid && req.session.username) {
    isAuth = true;
    console.debug(isAuth);
    knex("tasks")
      .where({user_id: req.session.userid})
      .select("*")
      .then((results) => {
        const tasks = JSON.parse(JSON.stringify(results));
        res.render("index", {
          title: "",
          isAuth: isAuth,
          tasks: tasks,
        })
      })
      .catch(function (err) {
        console.error(err);
        res.render("index", {
          title: "",
          errorMessage: [content],
          isAuth: isAuth,
        });
      });
  } else {
    isAuth = false;
    res.render("index", {
      title: "",
      isAuth: isAuth,
    });
  }
});

router.post('/', function (req, res, next) {
  knex("tasks")
    .insert({user_id: req.session.userid, content: req.body.content})
    .then(function () {
      res.redirect("/");
    })
    .catch(function (err) {
      console.error(err);
      res.render("index", {
        title: "",
        errorMessage: [content],
        isAuth: isAuth,
      });
    });
});

module.exports = router;

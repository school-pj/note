const express = require('express');
const router = express.Router();
const knex = require("../db/knex");
let isAuth;

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const userName = req.session.username;
  if (userId && userName) {
    isAuth = true;
    knex("tasks")
      .where({user_id: userId})
      .select("*")
      .then((results) => {
        const tasks = JSON.parse(JSON.stringify(results));
        res.render("index", {
          title: "",
          errorMessage: "",
          isAuth: isAuth,
          tasks: tasks,
          userId: userId,
        })
      })
      .catch(function (err) {
        console.error(err);
        res.render("index", {
          title: "",
          errorMessage: [err.sqlMessage],
          isAuth: isAuth,
        });
      });
  } else {
    isAuth = false;
    res.render("index", {
      title: "",
      errorMessage: "",
      isAuth: isAuth,
    });
  }
});

router.post('/', function (req, res, next) {
  const userId = req.session.userid;
  const content = req.body.content;
  if (Object.keys(req.body)[0] === "content") {
    knex("tasks")
      .insert({user_id: userId, content: content})
      .then(function () {
        res.redirect("/");
      })
      .catch(function (err) {
        console.error(err);
        res.render("index", {
          title: "",
          errorMessage: [err.sqlMessage],
          isAuth: isAuth,
        });
      });

  } else if (Object.keys(req.body)[0] === "taskId") {
    const taskId = req.body.taskId;
    knex("tasks")
      .where({
        id: taskId,
        user_id: userId,
      })
      .del()
      .then(function () {
        res.redirect("/");
      })
      .catch(function (err) {
        console.error(err);
        res.render("index", {
          title: "",
          errorMessage: [err.sqlMessage],
          isAuth: isAuth,
        });
      });
  }
});

module.exports = router;

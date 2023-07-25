const router = require("express").Router();
// const {comment, post, user} = require ('../models');

router.get("/", async (req, res) => {
  res.render("homepage", { username: "Joe" });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;

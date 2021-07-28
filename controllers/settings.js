const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Votes } = require("../models");

router.get("/", (req, res) => {
    User.findOne({
        attributes: { exclude: ["password"] },
        where: {
          id: req.session.user_id
        }
      })
      .then((dbPostData) => {
        // serialize data before passing to template
        res.render("settings", {loggedIn: true} );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;

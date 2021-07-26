const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Votes } = require("../models");
const withAuth = require("../utils/auth");

// render homepage with posts
router.get("/", (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "review",
      "rating",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(NULLIF(votes.upvote, 0)) FROM votes WHERE post.id = votes.post_id)"
        ),
        "upvotesCount",
      ],
      [
        sequelize.literal(
          "(SELECT COUNT(NULLIF(votes.downvote, 0)) FROM votes WHERE post.id = votes.post_id)"
        ),
        "downvotesCount",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "review",
      "rating",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(NULLIF(votes.upvote, 0)) FROM votes WHERE post.id = votes.post_id)"
        ),
        "upvotesCount",
      ],
      [
        sequelize.literal(
          "(SELECT COUNT(NULLIF(votes.downvote, 0)) FROM votes WHERE post.id = votes.post_id)"
        ),
        "downvotesCount",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;

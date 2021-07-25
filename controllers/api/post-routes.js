const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Votes } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "review",
      "rating",
      "created_at",
      [
        sequelize.literal('(SELECT COUNT(NULLIF(votes.upvote, 0)) FROM votes WHERE post.id = votes.post_id)'),
        'upvotesCount',
      ],
      [
        sequelize.literal('(SELECT COUNT(NULLIF(votes.downvote, 0)) FROM votes WHERE post.id = votes.post_id)'),
        'downvotesCount'
      ]
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/:id", (req, res) => {
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
        sequelize.literal('(SELECT COUNT(NULLIF(votes.upvote, 0)) FROM votes WHERE post.id = votes.post_id)'),
        'upvotesCount',
      ],
      [
        sequelize.literal('(SELECT COUNT(NULLIF(votes.downvote, 0)) FROM votes WHERE post.id = votes.post_id)'),
        'downvotesCount',
      ]
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a post
router.post("/", (req, res) => {
  Post.create({
    song_title: req.body.song_title,
    song_artist: req.body.song_artist,
    review: req.body.review,
    rating: req.body.rating,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// allow voting on a post
router.put('/upvote', (req, res) => {
  // need to update associations to allow posting/editing of voting??
  Post.upvote(req.body, { Vote })
  .then(updatedPostData => res.json(updatedPostData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update a post
router.put("/:id", (req, res) => {
  Post.update(
    {
      song_title: req.body.song_title,
      song_artist: req.body.song_artist,
      review: req.body.review,
      rating: req.body.rating,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

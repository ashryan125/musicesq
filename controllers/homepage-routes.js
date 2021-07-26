const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Votes } = require("../models");
<<<<<<< HEAD
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'song_title',
      'song_artist',
      'review',
      'rating',
      'user_id'
=======
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
>>>>>>> e77f1360d4eb334a4741d8eed6846b7b18a9f467
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
<<<<<<< HEAD
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
=======
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
>>>>>>> e77f1360d4eb334a4741d8eed6846b7b18a9f467
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD




//sddddddddddddddddddddddddddddddddddddddddddddddddddd
=======
// render login page
>>>>>>> e77f1360d4eb334a4741d8eed6846b7b18a9f467
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
<<<<<<< HEAD

// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });
=======
>>>>>>> e77f1360d4eb334a4741d8eed6846b7b18a9f467

module.exports = router;

const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//create a post
router.get("/create", withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "song_url",
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
          attributes: ["id", "username"],
        },
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//your-posts
router.get("/your-posts", withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "song_url",
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
          attributes: ["id", "username"],
        },
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("your-posts", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// activity page
router.get("/activity", withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "song_url",
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
          attributes: ["id", "username"],
        },
      },
      {
        model: User,
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("activity", { posts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//edit post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "song_url",
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
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ["id", "username"],
        }
      },
      {
        model: User,
        attributes: ["id", "username"],
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        console.log("error happened in edit post route")
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

//settings
router.get("/settings", withAuth, (req, res) => {
  User.findOne({
    where: {
      // use the ID from the session
      id: req.session.user_id,
    }
  })
    .then((dbUserData) => {
      if (dbUserData) {
        //console.log(dbUserData)
        let thisID = dbUserData.dataValues.id;
        console.log(thisID)
        res.redirect(`/dashboard/settings/${thisID}`);


      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//setting get 1 user
router.get("/settings/:id", withAuth, (req, res) => {
  let thisID = req.params.id
  User.findOne({
    where: {
      // use the ID from the session
      id: thisID,
    }
  })
    .then((dbUserData) => {
      if (dbUserData) {
        res.render("settings",
          { loggedIn: true, });

      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;

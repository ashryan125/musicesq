const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Votes } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', 
    {
        id: 1,
        songName: 'A sky full of stars',
        artist: 'ColdPlay',
        created_at: new Date(),
        likes: 10,
        dislikes: 2,
        reviews: [],
        user: {
            username: 'Sonika'
        }
    }
    );
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });


module.exports = router;


router.get("/", (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "song_title",
      "song_artist",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM votes WHERE post.id = votes.post_id)"
        ),
        "upvote_count",
        "downvote_count",
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
      // res.render("dashboard", { posts, loggedIn: true });
      res.render('homepage', { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
        attributes: ['username']
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
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

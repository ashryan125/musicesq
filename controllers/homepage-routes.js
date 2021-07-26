const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Votes } = require("../models");
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  Post.findAll({
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
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;

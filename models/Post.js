const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {
  // change api route for router.put to Post.votes(req.body { Vote })
  static upvote(body, models) {
    console.log('error in Post model extends Model');
    return models.Votes.create({
      user_id: body.user_id,
      post_id: body.post_id,
      // vote_type: body.vote_type
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'song_title',
          'song_artist',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'upvote_count']
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'downvote_count']
          
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    song_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    song_artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
        type: DataTypes.STRING(160),
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;


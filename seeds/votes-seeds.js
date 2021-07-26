const { Votes } = require('../models');

const votedata = [
  {
    user_id: 2,
    post_id: 1,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 1,
    post_id: 5,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 3,
    post_id: 1,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 2,
    post_id: 5,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 4,
    post_id: 3,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 3,
    post_id: 6,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 4,
    post_id: 4,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 3,
    post_id: 3,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 5,
    post_id: 2,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 6,
    post_id: 6,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 5,
    post_id: 5,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 6,
    post_id: 1,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 6,
    post_id: 2,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 6,
    post_id: 4,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 2,
    post_id: 4,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 2,
    post_id: 2,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 3,
    post_id: 5,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 6,
    post_id: 3,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 1,
    post_id: 1,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 4,
    post_id: 1,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 4,
    post_id: 6,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 2,
    post_id: 6,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 5,
    post_id: 4,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 1,
    post_id: 2,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 1,
    post_id: 3,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 1,
    post_id: 4,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 1,
    post_id: 6,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 5,
    post_id: 3,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 5,
    post_id: 6,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 6,
    post_id: 5,
    upvote: 1,
    // downvote: 0
  },
  {
    user_id: 4,
    post_id: 2,
    // upvote: 0,
    downvote: 1
  },
  {
    user_id: 3,
    post_id: 4,
    upvote: 1,
    // downvote: 0
  }
];

const seedVotes = () => Votes.bulkCreate(votedata);

module.exports = seedVotes;
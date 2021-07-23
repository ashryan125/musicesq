const { Votes } = require('../models');

const votedata = [
  {
    user_id: 2,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 1,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 1,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 4,
    post_id: 3,
    vote_type: false
  },
  {
    user_id: 3,
    post_id: 6,
    vote_type: true
  },
  {
    user_id: 4,
    post_id: 4,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 6,
    vote_type: false
  },
  {
    user_id: 3,
    post_id: 3,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 3,
    vote_type: false
  },
  {
    user_id: 5,
    post_id: 2,
    vote_type: false
  },
  {
    user_id: 6,
    post_id: 6,
    vote_type: false
  },
  {
    user_id: 5,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 1,
    vote_type: false
  },
  {
    user_id: 6,
    post_id: 4,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 4,
    vote_type: true
  },
  {
    user_id: 1,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 2,
    post_id: 2,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 4,
    vote_type: false
  },
  {
    user_id: 3,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 5,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 3,
    vote_type: false
  },
  {
    user_id: 1,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 2,
    post_id: 4,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 3,
    vote_type: false
  },
  {
    user_id: 6,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 3,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 4,
    post_id: 6,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 5,
    post_id: 4,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 1,
    vote_type: true
  },
  {
    user_id: 1,
    post_id: 2,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 3,
    vote_type: true
  },
  {
    user_id: 1,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 1,
    post_id: 6,
    vote_type: false
  },
  {
    user_id: 2,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 5,
    post_id: 3,
    vote_type: true
  },
  {
    user_id: 5,
    post_id: 6,
    vote_type: false
  },
  {
    user_id: 6,
    post_id: 6,
    vote_type: true
  },
  {
    user_id: 5,
    post_id: 2,
    vote_type: true
  },
  {
    user_id: 6,
    post_id: 5,
    vote_type: true
  },
  {
    user_id: 4,
    post_id: 2,
    vote_type: false
  },
  {
    user_id: 3,
    post_id: 4,
    vote_type: true
  }
];

const seedVotes = () => Votes.bulkCreate(votedata);

module.exports = seedVotes;
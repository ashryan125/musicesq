const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'mozartL0v3r',
    email: 'dfgdfdfbfdb0@abc.com',
    password: 'password1234'
  },
  {
    username: 'punkR0ckG1rl',
    email: 'punk4eva@gmail.ca',
    password: 'password'
  },
  {
    username: 'classicalGenius',
    email: 'rohroh@gmail.ca',
    password: 'password12345'
  },
  {
    username: 'iheartmusic',
    email: 'musiclovvveerr@gmail.ca',
    password: 'password55'
  },
  {
    username: 'musicFeva',
    email: 'fevamusic@gmail.ca',
    password: 'password1111'
  },
  {
    username: 'somerandomdude',
    email: 'duuuude@gmail.ca',
    password: 'passworddude'
  }

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
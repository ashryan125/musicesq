const { Post } = require('../models');

const postdata = [
  {
    song_title: 'Eine kleine Nachtmusik',
    song_artist: 'Mozart',
    review: 'Excellent classic song by one of the greatest composers of all times',
    rating: 4,
    user_id: 1
  },
  {
    song_title: 'Für Elise',
    song_artist: 'Beethoven',
    review: 'Nne of the most charming pieces for piano ever written',
    rating: 5,
    user_id: 3
  },
  {
    song_title: 'O mio babbino caro',
    song_artist: 'Puccini',
    review: 'One of the most romantic ever writtten',
    rating: 3,
    user_id: 2
  },
  {
    song_title: 'Toccata and Fugue in D minor',
    song_artist: 'J.S. Bach',
    review: 'One of the most romantic ever writtten',
    rating: 3,
    user_id: 2
  },
  {
    song_title: 'Symphony No.5 in C minor',
    song_artist: 'Beethoven',
    review: 'Worst song ever',
    rating: 1,
    user_id: 4
  },
  {
    song_title: 'The Four Seasons',
    song_artist: 'Vivaldi',
    review: 'Worst song ever',
    rating: 1,
    user_id: 5
  },
  {
    song_title: 'Carmen',
    song_artist: 'VBizet',
    review: 'Love this song',
    rating: 5,
    user_id: 6
  },
  {
    song_title: 'The Blue Danube',
    song_artist: 'Johann Strauss II',
    review: 'This song really moves me',
    rating: 4,
    user_id: 2
  },
  {
    song_title: 'Boléro',
    song_artist: 'Ravel',
    review: 'Super old school',
    rating: 3,
    user_id: 4
  },
  {
    song_title: 'Flower Duet’ from Lakmé',
    song_artist: 'Delibes',
    review: 'the composer is a bit of a one-hit wonder',
    rating: 5,
    user_id: 1
  },
  {
    song_title: 'In the Hall of the Mountain King',
    song_artist: 'Grieg',
    review: 'the composer is a bit of a one-hit wonder',
    rating: 2,
    user_id: 3
  },
  {
    song_title: 'Overture from The Marriage of Figaro',
    song_artist: 'Mozart',
    review: 'It is one of the most frequently performed operas of all time',
    rating: 5,
    user_id: 1
  },
  {
    song_title: 'Dance of the Knights',
    song_artist: 'Prokofiev',
    review: 'Most dramatic pieces of music ever written',
    rating: 5,
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage', {
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
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

//findall
//findone


module.exports = router;
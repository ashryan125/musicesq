//post page

const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('post');
});

module.exports = router;
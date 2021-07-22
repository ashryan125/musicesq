const express = require('express');
const router = express.Router();

const homepageRoutes = require('./homepage-routes.js');
const loginRoutes = require('./login-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/', homepageRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);

module.exports = router;

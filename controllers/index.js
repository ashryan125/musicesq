const express = require('express');
const router = express.Router();

const homepageRoutes = require('./homepage-routes.js');
// const loginRoutes = require('./login-routes.js');

router.use('/', homepageRoutes);
// router.use('/login', loginRoutes);

module.exports = router;

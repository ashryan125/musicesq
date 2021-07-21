const homepageRoutes = require('./homepage-routes.js');
const express = require('express');
const router = express.Router();

router.use('/', homepageRoutes);

module.exports = router;

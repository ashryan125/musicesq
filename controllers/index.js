const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;

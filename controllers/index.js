const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const yourRoutes = require('./your-posts.js');
const activity = require('./activity')
const userRoutes = require('./api/user-routes')
// const settings = require('./settings');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/your-posts', yourRoutes);
router.use('/activity', activity);
router.user('/settings', userRoutes);
// router.use('/settings', settings);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

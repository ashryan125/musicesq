const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
// const inputRoutes = require('./input');
// const voteRoutes = require('./vote-routes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// router.use('/input', inputRoutes);
// router.user('/votes', voteRoutes);

module.exports = router;

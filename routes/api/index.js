const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);

router.thoughts('/thoughts', thoughtRoutes);

module.exports = router;
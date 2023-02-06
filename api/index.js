const APIUserRoutes = require('./userRoutes');
const routes = require('express').Router();
const thoughtRoute = require('./thoughtRoutes');

router.use('/users', APIUserRoutes);
router.use('/thoughts', thoughtRoute);

module.exports = routes;

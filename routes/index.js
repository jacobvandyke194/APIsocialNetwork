const routes = require('express').Router();
const apiRoutes = require('./api');

routes.use('/api', apiRoutes);

routes.use((req, res) => res.send('Wrong Route'));

module.exports = routes;
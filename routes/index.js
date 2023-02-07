const APIroutes = require('./api');
const route = require('express').Router();
route.use((req, res) => res.send('Wrong Route! Try a different one!'));
route.use('/api', APIroutes);
module.exports = route;
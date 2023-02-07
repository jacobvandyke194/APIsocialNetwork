const thoughtRoute = require('./thoughtRoutes');
const userRoute = require('./userRoutes');
const router = require('express').Router();
router.use('/thoughts', thoughtRoute);
router.use('/users', userRoute);
module.exports = router;

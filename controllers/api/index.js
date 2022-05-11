const router = require('express').Router();
// const censusRoutes = require('./census-routes');
const userRoutes = require('./userRoutes.js');
// const economicRoutes = require('./economics-routes');
const schoolRoutes = require('./school-routes');
const moverRoutes = require('./mover-routes.js');

// router.use('/census', censusRoutes);
// router.use('/economic', economicRoutes);
router.use('/schools', schoolRoutes);
router.use('/movers', moverRoutes);
router.use('/users', userRoutes);

module.exports = router;

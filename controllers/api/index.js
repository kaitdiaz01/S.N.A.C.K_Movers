const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
// const economicRoutes = require('./economics-routes');
const schoolRoutes = require('./school-routes');
const moverRoutes = require('./mover-routes.js');
const categoriesRoutes = require('./categories-routes');
const censusRoutes = require('./census-routes.js');
const hotelRoutes = require('./hotel-routes')



// router.use('/economic', economicRoutes);
router.use('/categories', categoriesRoutes);
router.use('/schools', schoolRoutes);
router.use('/movers', moverRoutes);
router.use('/users', userRoutes);
router.use('/census', censusRoutes);
router.use('/hotels', hotelRoutes);

module.exports = router;

const router = require('express').Router();
const censusRoutes = require('./census-routes');
const economicRoutes = require('./economics-routes');
const schoolRoutes = require('./school-routes');
const yelpRoutes = require('./yelp-routes');

router.use('/census', censusRoutes);
router.use('/economic', economicRoutes);
router.use('/school', schoolRoutes);
router.use('/yelp', yelpRoutes);

module.exports = router;

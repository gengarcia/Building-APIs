const router = require('express').Router();
const chirpsRouter = require('./chirps');


router.use('/chirps', chirpsRouter);


module.exports = router;
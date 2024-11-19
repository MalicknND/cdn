const router = require('express').Router();
const fileRouter = require('./file.router');

router.use('/file', fileRouter);

module.exports = router;

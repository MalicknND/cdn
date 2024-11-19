const router = require('express').Router();
const fileController = require('../controllers/file.controller');
const uploadMulter = require('../middlewares/uploadMulter');

router.post('/upload', uploadMulter.single('file'), fileController.uploadFile);

module.exports = router;

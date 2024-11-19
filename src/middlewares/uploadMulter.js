const multer = require('multer');

const uploadMulter = multer({
  storage: multer.memoryStorage(), // Stocker les fichiers en mémoire
  limits: {fileSize: 1000000}, // Limite de 1MB
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a valid image file'));
    }
    cb(undefined, true);
  },
});

module.exports = uploadMulter;

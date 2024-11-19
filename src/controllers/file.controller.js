const sharp = require('sharp');

exports.uploadFile = async (req, res) => {
  try {
    await sharp(req.file.buffer)
      .resize({width: 250, height: 250})
      .webp({quality: 80}) // Conversion en WebP avec une qualité de 80%
      .toFile(
        __dirname +
          `/../images/${req.file.originalname.replace(/\.[^/.]+$/, '')}.webp`,
      );

    res.status(201).send('Image uploaded successfully');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

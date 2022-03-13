// Requirement
const fs = require('fs');
const {
  uploadFile,
  __basedir
} = require('../services/upload');
const db = require('../models/index');
const Image = db.image;

// Upload file function
exports.upload = async (req, res) => {
  // Get id
  const id = req.params.id;
  try {
    await uploadFile(req, res);

    if (req.files === undefined) {
      return res.status(400).json({
        message: 'No file uploaded'
      });
    }

    const images = req.files.map(item => {
      const image = {}
      image.product_id = id;
      image.file = item.filename;
      return image;
    });

    // Save to database
    await Image.bulkCreate(images).then(result => {
      res.status(201).json({
        message: 'Upload successfully',
        data: result
      });
    }).catch(err => {
      res.status(500).json({
        message: 'Error when uploading',
        error: err
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error when uploading',
      error: err
    });
  }
};

// Delete file function
exports.remove = (req, res) => {
  const id = req.params.id;
  Image.findByPk(id).then(result => {
    fs.unlink(`${__basedir}/storage/upload/${result.file}`, err => {
      if (err) {
        res.status(500).json({
          message: 'Error when deleting file',
          error: err
        });
        return;
      }

      Image.destroy({
        where: {
          id: id
        }
      }).then(num => {
        if (num == 1) {
          res.status(200).json({
            message: 'Image deleted successfully'
          });
        } else {
          res.status(500).json({
            message: `Cannot delete image with id ${id}`
          });
        }
      }).catch(err => {
        res.status(500).json({
          message: 'Error when deleting file',
          error: err
        });
      });
    });
  }).catch(err => {
    res.status(500).json({
      message: 'Error when getting image',
      error: err
    });
  });
};
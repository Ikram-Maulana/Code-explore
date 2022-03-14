// Requirement
const multer = require('multer');
const util = require('util');
const path = require('path');
const __basedir = path.resolve();

// Setup
// Image Filter
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('File type is not image'), false);
  }
};

// Path to storage/upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/storage/upload');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// upload image setup
const uploadImage = multer({
  storage: storage,
  fileFilter: imageFilter
}).array('files', 5);

// Upload file using util
let uploadFile = util.promisify(uploadImage);

// Exports
module.exports = {
  uploadFile,
  __basedir
};
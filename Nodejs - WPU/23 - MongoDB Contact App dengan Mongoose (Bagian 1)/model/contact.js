const mongoose = require('mongoose');

// Make Schema
const Contact = mongoose.model('Contact', {
  nama: {
    type: String,
    required: true
  },
  nohp: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Export
module.exports = Contact;
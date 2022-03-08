const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema user
const userSchema = new mongoose.Schema({
  local: {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
});

// User Method
// Hash Password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
// Check Password
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

// Export User
module.exports = mongoose.model('User', userSchema);
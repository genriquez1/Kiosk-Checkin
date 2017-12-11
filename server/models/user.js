const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs')

var User = new Schema({
  id: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
    trim: true
  },
  company: {
    type: String,
    // unique: true,
    // required: true,
    trim: true
  },
  telephone: {
    type: String,
    // required: true
  },
  displayName: {
    type: String,
    // required: true
  },
  escourt: {
    type: String,
    // required: true
  },
  createdOn: {
    type: Date,
    // required: true
  }
})

module.exports = mongoose.model('User', User)

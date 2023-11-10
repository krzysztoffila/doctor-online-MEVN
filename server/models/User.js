const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  pesel: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

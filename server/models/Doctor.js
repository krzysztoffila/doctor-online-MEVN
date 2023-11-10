const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  availability: {
    type: [String],
    required: true
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

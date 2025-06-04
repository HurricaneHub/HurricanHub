const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  contact_info: String,
  relation: String,
  caregiver_notes: String
});

module.exports = mongoose.model('Caregiver', caregiverSchema);

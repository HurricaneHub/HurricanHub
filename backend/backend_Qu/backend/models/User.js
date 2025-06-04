const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  emergency_contacts: [String],
  preferences: {
    calming_content: [String],
    mobility_status: String,
    health_info: String
  },
  caregiver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Caregiver'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

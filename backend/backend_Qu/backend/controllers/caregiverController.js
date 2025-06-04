const Caregiver = require('../models/Caregiver');

const createCaregiver = async (req, res) => {
  try {
    const caregiver = new Caregiver(req.body);
    await caregiver.save();
    res.status(201).json(caregiver);
    console.log("Successfully create user");
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
};

const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
    console.log(caregivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCaregiver, getCaregivers };

const express = require('express');
const router = express.Router();
const { createCaregiver, getCaregivers } = require('../controllers/caregiverController');

router.post('/create', createCaregiver);
router.get('/all', getCaregivers);

module.exports = router;

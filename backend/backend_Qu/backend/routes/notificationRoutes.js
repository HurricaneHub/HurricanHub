const express = require('express');
const router = express.Router();
const { sendPushNotification } = require('../controllers/notificationController');

router.post('/push', sendPushNotification);
router.post('/sms', sendSMS);
router.post('/push', sendPushNotification);

module.exports = router;

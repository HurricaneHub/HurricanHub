const admin = require('../utils/firebase'); // Firebase setup
const twilio = require('twilio');
require('dotenv').config();

// Twilio setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// 🔔 Send Firebase Push Notification
const sendPushNotification = async (req, res) => {
  const { deviceToken, title, body } = req.body;

  const message = {
    token: deviceToken,
    notification: {
      title,
      body,
    },
  };

  try {
    await admin.messaging().send(message);
    res.json({ success: true, message: 'Push notification sent.' });
  } catch (err) {
    console.error('Push Error:', err);
    res.status(500).json({ error: 'Failed to send push notification' });
  }
};

// 📩 Send SMS via Twilio
const sendSMS = async (req, res) => {
  const { to, message } = req.body;

  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to
    });

    res.json({ success: true, sid: result.sid, message: 'SMS sent successfully.' });
  } catch (err) {
    console.error('SMS Error:', err.message);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
};

module.exports = {
  sendPushNotification,
  sendSMS
};

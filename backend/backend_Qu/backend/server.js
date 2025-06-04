const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const caregiverRoutes = require('./routes/caregiverRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('API is running...');
});


// routes that will be using
app.use('/api/caregivers', caregiverRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/notify', notificationRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const axios = require('axios');

// Load environment variables
require('dotenv').config();

const generateChatResponse = async (req, res) => {
  const { userPreferences, message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant supporting elderly users during natural disasters. Be empathetic, comforting, and use data like: ${JSON.stringify(userPreferences)}.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    res.json({ response: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Chatbot failed to respond' });
  }
};

module.exports = { generateChatResponse };

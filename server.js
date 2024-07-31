const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.query;
    const response = await axios.get('https://api.coffeeapi.com/search?query=${query}', {
      headers: { 'Authorization': 'Bearer ${process.env.API_KEY}' }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching coffee data');
  }
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
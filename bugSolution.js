const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    console.error('Received empty JSON request body');
    return res.status(400).send('Invalid request: Empty body');
  }
  try {
    console.log('Request body:', req.body);
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).send('Invalid request: Invalid JSON');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));
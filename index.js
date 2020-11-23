require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/api/user', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

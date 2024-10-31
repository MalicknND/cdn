const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, async (req, res) => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

const express = require('express');
const app = express();
require('dotenv').config();
const apiRouter = require('./routers');
const rateLimit = require('express-rate-limit');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use('/api', apiRouter);

app.listen(process.env.PORT, async (req, res) => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

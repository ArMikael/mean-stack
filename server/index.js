const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Store')
});

const port = process.env.PORT || 3300;
app.listen(port);
console.log(`Listening to port ${port}...`);

const express = require('express');
const mongoose = require('mongoose');

const auth = require('./routes/auth.router');
const app = express();

app.use(express.json());
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Store')
});

const port = process.env.PORT || 3300;
app.listen(port);
console.log(`Listening to port ${port}...`);

const express = require('express');
const mongoose = require('mongoose');

const auth = require('./routes/auth.router');
const user = require('./routes/user.router');
const { privateConfig } = require('./config/private-config');

const app = express();

app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/user', user);

mongoose.connect(privateConfig.mdbMeanStackConnectionString, { useNewUrlParser: true })
  .then(()=> console.log('Connected to MongoDB.'))
  .catch(() => console.log('Could not connect to MongoDB'));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Store')
});

const port = process.env.PORT || 3300;
app.listen(port);
console.log(`Listening to port ${port}...`);

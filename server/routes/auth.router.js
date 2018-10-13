const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Welcome to the AUTH');
  console.log('Auth GET');
});

router.post('/', async (req, res) => {
  res.status(200).send('POST OK.');
  console.log('Auth POST');
});

module.exports = router;

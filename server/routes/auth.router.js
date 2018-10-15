const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.get('/', async (req, res) => {
  res.status(200).send('Welcome to the AUTH');
  console.log('Auth GET');
});

router.post('/', async (req, res) => {
  try {
    let { error } = await validateUser(req.body);
    if (error) { return res.status(400).send('Wrong user parameters: ', error.details[0].message); }

    res.status(200).send('POST OK.');
    console.log('Auth POST');
  }

  catch(ex) {
    console.log(ex.message);
    res.send(ex.message);
  }

  function validateUser(newUser) {
    const userSchema = {
      fullName: Joi.string().min(3).required(),
      email: Joi.string().email().required,
      password: Joi.string.min(5).required()
    };

    return Joi.validate(newUser, userSchema);
  }

});

module.exports = router;

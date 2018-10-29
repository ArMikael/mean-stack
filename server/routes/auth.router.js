const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

router.get('/', async (req, res) => {
  res.status(200).send('Welcome to the AUTH');
  console.log('Auth GET');
});

router.post('/', async (req, res) => {
  try {
    let { error } = await validateUser(req.body);
    if (error) return res.status(400).send('Wrong user parameters: ', error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Email or password.');

    const token = await user.generateAuthToken();
    res.header('x-auth-token', token).status(200).send('The user successfully authenticated.');
  }

  catch(ex) {
    console.log(ex.message);
    res.send(ex.message);
  }

  function validateUser(authUser) {
    const userSchema = {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    };

    return Joi.validate(authUser, userSchema);
  }

});

module.exports = router;

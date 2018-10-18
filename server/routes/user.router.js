const express = require('express');
const router = express.Router();
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');

const { User } = require('../models/user.model');

// TODO: Implement authorized middleware
// const auth = require('../middleware/auth.middleware');
// router.get('/me', auth, async (req, res) => {
// router.post('/', async (req, res) => {

router.get('/me', async (req, res) => {
  const user = await User.findById(req.user._id).select('-password'); // - exclude password from user object
  res.send(user);
});

router.post('/', async (req, res) => {
 try {
   let { error } = await validateUser(req.body);
   if (error) return res.status(400).send('Wrong user parameters: ', error.details[0].message);

   let user = await User.findOne({ email: req.body.email });
   if (user) return res.status(400).send('User already registered.');

   user = new User(_.pick(req.body, ['fullName', 'email', 'password']));

   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password, salt);

   await user.save();

   res.send(_.pick(user, ['_id', 'fullName', 'email']));
 }

 catch(ex) {
   console.log(ex.message);
   res.send(ex.message);
 }
});


function validateUser(newUser) {
  const userSchema = {
    fullName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required()
  };

  return Joi.validate(newUser, userSchema);
}

module.exports = router;

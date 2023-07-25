const bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  passport = require("passport");

const { User } = require("../models");

// User sign up controller
const signUp = async (req, res) => {
  const { name, email, birthday, sex, location, telephone, password } =
    req.body;
  const { errors } = {};

  const user = await User.findOne({ email });

  if (user) {
    errors.email = "Some other user already uses that email address.";
    return res.status(400).json(errors);
  }
  const newUser = new User({
    name,
    email,
    birthday,
    sex,
    location,
    telephone,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      if (await newUser.save()) res.json(newUser);
    });
  });
};

module.exports = { signUp };

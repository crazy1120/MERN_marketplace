const bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  passport = require("passport");

const { User } = require("../models"),
  { keys } = require("../config"),
  errors = {};

// User sign up controller
const signUp = async (req, res) => {
  const { name, email, birthday, sex, location, telephone, password, level } =
    req.body;

  //Check email existence
  const user = await User.findOne({ email });
  if (user) {
    errors.email = "Some other user already uses that email address.";
    return res.status(400).json(errors);
  }

  const levelOption = { seller: 1, broker: 2, buyer: 3 };
  const newUser = new User({
    name,
    email,
    birthday,
    sex,
    location,
    telephone,
    password,
    level: levelOption[level],
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      if (await newUser.save()) res.json(newUser);
    });
  });
};

// User sign in controller
const signIn = async (req, res) => {
  const { email, password } = req.body;

  //Check email existence
  const user = await User.findOne({ email });
  if (!user) {
    errors.email = "You are not registered yet. Sign up first.";
    return res.status(404).json(errors);
  }

  const pwdVerify = await bcrypt.compare(password, user.password);

  if (pwdVerify) {
    const payload = { name: user.name, email: user.email, level: user.level };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: "24h" }, (err, token) =>
      res.json({ token: `Bearer ${token}` })
    );
  } else {
    errors.password = "Incorrect password entered.";
    return res.status(400).json(errors);
  }
};

module.exports = { signUp, signIn };

const bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

const { User } = require("../models"),
  { keys } = require("../config"),
  errors = {};

/**
 * Register a new user object with user info
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.signUp = async (req, res) => {
  const { name, email, password, level } = req.body;

  //Check email existence
  const user = await User.findOne({ email });
  if (user) {
    errors.email = "Some other user already uses that email address.";
    return res.status(400).json(errors);
  }

  const levelOption = { creator: 1, brand: 2, buyer: 3 };
  const newUser = new User({
    name,
    email,
    password,
    level: levelOption[level],
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      await newUser.save();
      return res.json({ success: "You are successfully registered." });
    });
  });
};

/**
 * Sign in a user with email and pwd
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  //Check email existence
  const user = await User.findOne({ email });
  if (!user) {
    errors.email = "You are not registered yet. Sign up first.";
    return res.status(404).json(errors);
  }

  const pwdVerify = await bcrypt.compare(password, user.password);

  if (pwdVerify) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      level: user.level,
    };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: "24h" }, (err, token) =>
      res.json({ token: `Bearer ${token}` })
    );
  } else {
    errors.password = "Incorrect password entered.";
    return res.status(400).json(errors);
  }
};

/**
 * Get authenticated user's info
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getUser = async (req, res) => {
  const { name, email } = req.user;
  return res.json({ name, email });
};

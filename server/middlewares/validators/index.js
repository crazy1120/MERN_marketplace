// Includes validation middlewares
const validator = (eachValidator) => (req, res, next) => {
  const { errors, isValid } = eachValidator(req.body);
  isValid ? next() : res.status(400).json(errors);
};

module.exports = {
  // Common auth validators
  signIn: validator(require("./signIn")),
  signUp: validator(require("./signUp")),

  // Validators of creator actions
  dealFormat: validator(require("./dealFormat")),
};

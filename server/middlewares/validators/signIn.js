const Validator = require("validator");
const isEmpty = require("./is_empty");

// Validation middleware necessary when user signs in
module.exports = (data) => {
  const errors = {};
  const fields = ["email", "password"];

  for (const field of fields) {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
  }

  // Email field validator
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // Empty fields validator
  for (const field of fields) {
    if (Validator.isEmpty(data[field])) {
      errors[field] = `${
        field[0].toUpperCase() + field.slice(1)
      } field is required.`;
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

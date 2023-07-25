const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = (data) => {
  const errors = {};
  const fields = [
    "name",
    "email",
    "birthday",
    "sex",
    "location",
    "telephone",
    "password",
    "confirm",
  ];

  for (const field of fields) {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
  }

  // Name field validator
  if (!Validator.isLength(data.name, { min: 3 })) {
    errors.name = "Name must containe at least 3 letters.";
  }

  // Email field validator
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // Password and it's confirm field validator
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password is either too short or too long.";
  }
  if (!Validator.equals(data.password, data.confirm)) {
    errors.confirm = "Password and confirmation doesn't match.";
  }

  // Birthday field validator
  if (!Validator.isDate(data.birthday)) {
    errors.birthday = "Birthday data you entered is not a valid date.";
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

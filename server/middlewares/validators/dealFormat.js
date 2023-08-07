const Validator = require("validator");
const isEmpty = require("./is_empty");

// Validation middleware necessary when create or update deal
module.exports = (data) => {
  const errors = {};
  const fields = ["title", "desc", "price"];

  for (const field of fields) {
    data[field] = !isEmpty(data[field]) ? data[field] : "";
  }

  // Title & description fields validator
  if (!Validator.isLength(data.title, { max: 30 })) {
    errors.title = "Title must be shorter than 30 characters.";
  }
  if (!Validator.isLength(data.desc, { min: 10 })) {
    errors.desc = "Description must be longer than 10 characters.";
  }

  // Price field validator
  if (!/^\d+(\.\d+)?$/.test(data.price)) {
    errors.price = "Price you proposed is not reliable.";
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

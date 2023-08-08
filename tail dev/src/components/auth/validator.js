// Validator for sign in
export const signInVaidator = (formData) => {
  const validationErrors = {};

  if (!formData.name) {
    validationErrors.name = "You must enter your name.";
  }

  if (!formData.email) {
    validationErrors.email = "You must enter your email.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validationErrors.email = "Email you provided is invalid.";
  }

  if (!formData.password) {
    validationErrors.password = "You must set password.";
  } else if (formData.password.length < 6) {
    validationErrors.password = "Password should be at least 6 characters long";
  }

  if (!formData.confirm) {
    validationErrors.confirm = "You must provide password confirm.";
  } else if (formData.password != formData.confirm) {
    validationErrors.confirm = "Password and its confrim doesn't match.";
  }

  return validationErrors;
};

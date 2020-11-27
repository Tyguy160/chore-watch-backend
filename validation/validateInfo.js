const Validator = require('validator');
const { isEmpty } = require('../utils/isEmpty');

const validateInformation = (userInfo) => {
  let errors = {};

  // Make sure the information isn't empty
  userInfo.email = !isEmpty(userInfo.email) ? userInfo.email : '';
  userInfo.password = !isEmpty(userInfo.password) ? userInfo.password : '';

  // Email validation
  if (Validator.isEmpty(userInfo.email)) {
    errors.email = 'Email is required.';
  }
  if (!Validator.isEmail(userInfo.email)) {
    errors.email = 'Email address is invalid';
  }

  // Password validation
  if (Validator.isEmpty(userInfo.password)) {
    errors.password = 'Password is required';
  }
  if (!Validator.isLength(userInfo.password, { min: 8, max: 120 })) {
    errors.password = 'Password must be between 8 and 120 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { validateInformation };

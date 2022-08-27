const { getProfile } = require('./Profile');
const { pageNotFound, internalServerError } = require('./Errors');
const { getSignIn } = require('./Signin');

module.exports = {
  getProfile,
  pageNotFound,
  internalServerError,
  getSignIn,
};

const { getProfile } = require('./Profile');
const { pageNotFound, internalServerError } = require('./Errors');

module.exports = {
  getProfile,
  pageNotFound,
  internalServerError,
};

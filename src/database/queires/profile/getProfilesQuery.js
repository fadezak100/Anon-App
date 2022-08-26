const connection = require('../../config/connection');

const getProfilesQuery = () => connection.query('select * from users');

module.exports = getProfilesQuery;

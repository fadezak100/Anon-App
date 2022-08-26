const connection = require('../../config/connection');

const insertProfileQuery = ({ username, password }) => connection.query({
  text: 'INSERT INTO USERS(USERNAME, PASSWORD) VALUES ($1, $2) returning *',
  values: [username, password],
});

module.exports = insertProfileQuery;

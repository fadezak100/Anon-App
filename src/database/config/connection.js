const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV,
  DATABASE_URL,
  DEV_URL,
  TEST_DB,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'prodction':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'development':
    connectionString = DEV_URL;
    break;
  case 'test':
    connectionString = TEST_DB;
    break;
  default:
    throw new Error('Database URL is not valid');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;

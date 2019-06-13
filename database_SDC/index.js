const pg = require('pg');

const { Pool } = pg;
const pool = new Pool({
  database: 'reviews',
  port: 5432,
});

module.exports = { pool };
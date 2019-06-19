const pg = require('pg');

const { Pool } = pg;
const pool = new Pool({
  host: '18.219.31.177',
  port: 5432,
  user: 'postgres',
  password: 'mattviolet',
  database: 'reviews'
});

module.exports = { pool };
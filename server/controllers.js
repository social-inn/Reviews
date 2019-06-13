const db = require('../database_SDC/index.js');

const getRoomReviews = (req, res) => {
  console.log('req.params.room_id: ', req.params.room_id);
  const query = `SELECT * FROM reviews WHERE room_id=${req.params.room_id}`;
  db.pool.query(query, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getRoomReviews
};
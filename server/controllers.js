const db = require('../database_SDC/index.js');

const getRoomReviews = (req, res) => {
  const query = `SELECT * FROM reviews WHERE room_id=${req.params.room_id}`;
  db.pool.query(query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const addRoomReview = ((req, res) => {
  const query = 'INSERT INTO reviews (room_id, username, gender, profilepicnum, reviewdate, sentence, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, overall_rating) VALUES (50999888, \'dude117\', 1, 23, \'January 28, 2019\', \'sentence goes here yo\', 5, 5, 5, 5, 5, 5, 5)';
  db.pool.query(query, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports = {
  getRoomReviews,
  addRoomReview
};
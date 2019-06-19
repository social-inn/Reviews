const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const reviews = require('./controllers.js');

const app = express();
const PORT = 3004;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(cors());

app.get('/reviews/:room_id', reviews.getRoomReviews);
app.post('/reviews/:room_id', reviews.addRoomReview);

app.listen(PORT, ()=>{
  console.log("Server is now listening on port:", PORT);
});
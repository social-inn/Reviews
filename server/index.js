const mongoose = require('mongoose');
const db = require('../database/schema.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');

const PORT = 3004;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/reviews/:room_id', (req, res) => {
  mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
  const target = {room_id: req.params.room_id};
  db.Reviews.find(target)
    .then((data) => {
      mongoose.connection.close();
      res.status(200).send(data);
    })
    .catch((err) => {
      mongoose.connection.close();
      res.status(500).send("Fail to fetch");
    })
});

// ================ ADD CRUD ROUTES =====================================

// app.post('/reviews', (req, res) => {
//   mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
//   db.Reviews.create(req.body, function(err, data){
//     if(err){
//       mongoose.connection.close();
//       res.status(500).send('POST request failed');
//     } else {
//       mongoose.connection.close();
//       res.status(201).send('POST request successful');
//     }
//   })
// });

// app.put('/reviews', (req, res) => {
//   mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
//   db.Reviews.save(req.body, function(err, data){
//     if(err){
//       mongoose.connection.close();
//       res.status(500).send('PUT request failed');
//     } else {
//       mongoose.connection.close();
//       res.status(201).send('PUT request successful');
//     }
//   })
// })

// ======================================================================


app.listen(PORT, ()=>{
  console.log("Server is now listening on port:", PORT);
});
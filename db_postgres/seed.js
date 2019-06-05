// const {reviewGenerator} = require('./review_Generator.js/index.js');
// const {roomReviewGenerator} = require('./room_Review_Generator.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
const casual = require('casual');

var numberOfHomes = 1000;
var reviewsPerHome = 25;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (var i = 0; i < numberOfHomes; i++) {
    for (var j = 0; j < reviewsPerHome; j++) {
      writer.write({
        room_id: i+1,
        review_id: j+1,
        name: casual.first_name,
        gender: casual.gender,
        profilePicNum: casual.integer(0, 99),
        date: casual.date('MMMM YYYY'),
        sentence: casual.text, 
        accuracy_rating: casual.double(0, 5).toFixed(1),
        communication_rating: Number(casual.double(0, 5).toFixed(1)),
        cleanliness_rating: Number(casual.double(0, 5).toFixed(1)),
        location_rating: Number(casual.double(0, 5).toFixed(1)),
        check_in_rating: Number(casual.double(0, 5).toFixed(1)),
        value_rating: Number(((this.accuracy_rating
          + this.communication_rating
          + this.cleanliness_rating
          + this.location_rating
          + this.check_in_rating
          + this.value_rating) / 6)
         .toFixed(1))
      });
    }
  }

  writer.end();
  console.log('done');
}

dataGen();
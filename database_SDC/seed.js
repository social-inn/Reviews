const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
const casual = require('casual');

var numberOfHomes = 100000;
var reviewsPerHome = 100;
// var numberOfHomes = 10;
// var reviewsPerHome = 3;
var review_id = 1;
var name = () => casual.first_name;
var gender = () => casual.integer(0, 1);
var profilepicnum = () => casual.integer(0, 99);
var date = () => casual.date('MMMM YYYY');
var sentence = () => casual.text; 
var accuracy_rating = () => (Math.floor((Math.random() * 50)) / 10);
var communication_rating = () => (Math.floor((Math.random() * 50)) / 10);
var cleanliness_rating = () => (Math.floor((Math.random() * 50)) / 10);
var location_rating = () => (Math.floor((Math.random() * 50)) / 10);
var check_in_rating = () => (Math.floor((Math.random() * 50)) / 10);
var value_rating = () => (Math.floor((Math.random() * 50)) / 10);
var overall_rating = () => (Math.floor((Math.random() * 50)) / 10);


const dataGen = () => {

  console.log('Generating data. This may take a minute...');
  writer.pipe(fs.createWriteStream('sample.csv'));
  for (var i = 0; i < numberOfHomes; i++) {
    for (var j = 0; j < reviewsPerHome; j++) {
      writer.write({
        review_id: review_id,
        room_id: i+1,
        username: name(),
        gender: gender(),
        profilepicnum: profilepicnum(),
        reviewdate: date(),
        sentence: sentence(), 
        accuracy_rating: accuracy_rating(),
        communication_rating: communication_rating(),
        cleanliness_rating: cleanliness_rating(),
        location_rating: location_rating(),
        check_in_rating: check_in_rating(),
        value_rating: value_rating(),
        overall_rating: overall_rating(),
      });
      review_id++;
    }
  }
  console.log('*** Saved ' + (numberOfHomes * reviewsPerHome) + ' records to CSV file ***');

  // append to file 9 more times, 10 total
  // for (var h = 0; h < 9; h++) {
  //   writer.pipe(fs.createWriteStream('sample.csv',  {flags: 'a'}));
  //   for (var i = 0; i < numberOfHomes; i++) {
  //     for (var j = 0; j < reviewsPerHome; j++) {
  //       writer.write({
  //         room_id: i+1,
  //         username: name(),
  //         gender: gender(),
  //         profilepicnum: profilepicnum(),
  //         reviewdate: date(),
  //         sentence: sentence(), 
  //         accuracy_rating: accuracy_rating(),
  //         communication_rating: communication_rating(),
  //         cleanliness_rating: cleanliness_rating(),
  //         location_rating: location_rating(),
  //         check_in_rating: check_in_rating(),
  //         value_rating: value_rating(),
  //         overall_rating: overall_rating(),
  //       });
  //       review_id++;
  //     }
  //   }
  //   console.log('*** Appended ' + (numberOfHomes * reviewsPerHome) + ' records to CSV file ***');
  // }

  writer.end();
  console.log('Data file complete');
}

dataGen();
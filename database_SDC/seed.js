const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
const casual = require('casual');

var numberOfHomes = 10000000;
var review_id = 1;
var usernames = [];
var profilePicNums = [];
var dates = [];
var sentences = [];

var chooseRandom = (array) => {
  var result = array[Math.floor(Math.random() * array.length)];
  return result;
}

var generateNamesArr = (x) => {
  for (var i = 0; i < x; i++) {
    usernames.push(casual.first_name);
  }
}

var chooseGender = () => {
  var gender = Math.floor(Math.random() * 2);
  return gender;
}

var generateProfilePicNumArr = (x) => {
  for (var i = 0; i < x; i++) {
    profilePicNums.push(casual.integer(0, 99));
  }
}

var generateDates = (x) => {
  for (var i = 0; i < x; i++) {
    dates.push(casual.date('MMMM YYYY'));
  }
}

var generateSentences = (x) => {
  for (var i = 0; i < x; i++) {
    sentences.push(casual.text);
  }
}

var generateRating = () => {
  var rating = Math.floor((Math.random() * 50)) / 10;
  return rating;
}

generateNamesArr(50);
generateProfilePicNumArr(50);
generateDates(50);
generateSentences(50);

// comment out review_id when seeding postgres
const dataGen = () => {
  console.log('Generating data. This may take a minute...');
  writer.pipe(fs.createWriteStream('sample.csv'));
  // genereate 10M homes with 0-20 reviews each
  for (var i = 0; i < numberOfHomes; i++) {
    var reviewsPerHome = Math.floor(Math.random() * 20);
    for (var j = 0; j < reviewsPerHome; j++) {
      writer.write({
        review_id: review_id,
        room_id: i+1,
        username: chooseRandom(usernames),
        gender: chooseGender(),
        profilepicnum: chooseRandom(profilePicNums),
        reviewdate: chooseRandom(dates),
        sentence: chooseRandom(sentences), 
        accuracy_rating: generateRating(),
        communication_rating: generateRating(),
        cleanliness_rating: generateRating(),
        location_rating: generateRating(),
        check_in_rating: generateRating(),
        value_rating: generateRating(),
        overall_rating: generateRating(),
      });
      review_id++;
    }
  }

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
  console.log('*** Saved ' + numberOfHomes + ' homes to CSV file ***');
}

dataGen();
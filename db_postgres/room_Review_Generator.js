/*
 * Generate random number of reviews for each room
 * Input: number of rooms
 * Output: Array of array of reviews
 */
const casual = require('casual');
const { reviewGenerator } = require('./reviewGenerator.js');

const roomReviewGenerator = function (numOfRooms) {
  let arrayOfReviewArrays = [];
  for (let i = 0; i < numOfRooms; i += 1) {
    let numOfReviews = casual.integer(from = 3, to = 500);
    let room_id = i + 1;
    arrayOfReviewArrays.push({ room_id, reviews: reviewGenerator(numOfReviews) });
  }

  console.log(`Generating reviews for ${numOfRooms} rooms...`);

  return arrayOfReviewArrays;
};

module.exports = { roomReviewGenerator };

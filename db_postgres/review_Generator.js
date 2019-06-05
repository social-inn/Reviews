/*
Input: Number of reviews
Output: An array of random reviews

review = {
  id
  name
  gender
  profilePicNum
  date
  sentence
  accuracy_rating
  communication_rating
  cleanliness_rating
  location_rating
  check_in_rating
  value_rating
}
*/

const casual = require('casual');

// give each review a review_id and room_id
const reviewGenerator = function (numReviews) {
  let reviewsArr = [];
  
  for (let i = 0; i < numReviews; i++) {
    const review = {};
      
    //id
    const id = i+1;
    review.id = id;

    // name
    const name = casual.first_name;
    review.name = name;

    //gender 0:women 1:men
    let from = 0;
    let to = 1;
    const gender = casual.integer(from, to);
    review.gender = gender;

    //profile pic
    from = 0;
    to = 99;
    const profilePicNum = casual.integer(from, to);
    review.profilePicNum = profilePicNum;

    // date
    let format = 'MMMM YYYY';
    const date = casual.date(format);
    review.date = date;

    // sentence
    const sentence = casual.text;
    review.sentence = sentence;

    // rating_accuracy
    from = 0;
    to = 5;
    const accuracy_rating = casual.double(from, to).toFixed(1);
    review.accuracy_rating = Number(accuracy_rating);

    // rating_communication
    const communication_rating = casual.double(from, to).toFixed(1);
    review.communication_rating = Number(communication_rating);

    // rating_cleanliness
    const cleanliness_rating = casual.double(from, to).toFixed(1);
    review.cleanliness_rating = Number(cleanliness_rating);

    // rating_location
    const location_rating = casual.double(from, to).toFixed(1);
    review.location_rating = Number(location_rating);

    // rating_check_in
    const check_in_rating = casual.double(from, to).toFixed(1);
    review.check_in_rating = Number(check_in_rating);

    // rating_value
    const value_rating = casual.double(from, to).toFixed(1);
    review.value_rating = Number(value_rating);

    // overall_rating = ratings above / 6
    review.overall_rating = Number(((review.accuracy_rating
       + review.communication_rating
       + review.cleanliness_rating
       + review.location_rating
       + review.check_in_rating
       + review.value_rating) / 6)
      .toFixed(1));

    reviewsArr.push(review);
  }

  return reviewsArr;
};


module.exports = { reviewGenerator };
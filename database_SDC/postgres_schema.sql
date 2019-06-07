CREATE DATABASE reviewschema;

\c reviewschema

DROP TABLE IF EXISTS reviewtable;
-- store all reviews in one table for faster query
CREATE TABLE reviewtable (
  review_id SERIAL PRIMARY KEY,
  room_id INTEGER NOT NULL,
  username VARCHAR(255) NOT NULL,
  gender INTEGER NOT NULL,
  profilepicnum INTEGER NOT NULL,
  reviewdate VARCHAR(255) NOT NULL,
  sentence VARCHAR(500) NOT NULL,
  accuracy_rating DECIMAL NOT NULL,
  communication_rating DECIMAL NOT NULL,
  cleanliness_rating DECIMAL NOT NULL,
  location_rating DECIMAL NOT NULL,
  check_in_rating DECIMAL NOT NULL,
  value_rating DECIMAL NOT NULL,
  overall_rating DECIMAL NOT NULL
);

COPY reviewtable (room_id, username, gender, profilePicNum, reviewdate, sentence, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, overall_rating) FROM '/Users/mattviolet/Desktop/Reviews/sample.csv' DELIMITER ',' CSV HEADER;
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY UNIQUE,
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

-- copy csv to database
COPY reviews (room_id, username, gender, profilePicNum, reviewdate, sentence, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, overall_rating) FROM '/Users/mattviolet/Desktop/Reviews/sample.csv' DELIMITER ',' CSV HEADER;

-- create secondary index
CREATE INDEX room_idx ON reviews (room_id);

-- turn on timing to measure queries
\timing on
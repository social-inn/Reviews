CREATE KEYSPACE reviews 
  WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
  };

USE KEYSPACE reviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  review_id INT,
  room_id INT ,
  username VARCHAR ,
  gender INT ,
  profilepicnum INT ,
  reviewdate VARCHAR ,
  sentence VARCHAR,
  accuracy_rating DECIMAL,
  communication_rating DECIMAL,
  cleanliness_rating DECIMAL,
  location_rating DECIMAL,
  check_in_rating DECIMAL,
  value_rating DECIMAL,
  overall_rating DECIMAL,
  PRIMARY KEY (review_id) 
);


COPY reviews (review_id, room_id, username, gender, profilePicNum, reviewdate, sentence, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, overall_rating) FROM '/Users/mattviolet/Desktop/Reviews/sample.csv' WITH HEADER = true;

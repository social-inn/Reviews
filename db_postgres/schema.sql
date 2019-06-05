DROP TABLE IF EXISTS reviewTable;

CREATE SCHEMA reviewSchema;

\c  reviewSchema

-- store all reviews in one table for faster query
CREATE TABLE reviewTable (
  review_id INTEGER NOT NULL PRIMARY KEY UNIQUE,
  room_id INTEGER NOT NULL ,
  gender INTEGER NOT NULL,
  profilePicNum INTEGER NOT NULL,
  date DATE NOT NULL,
  sentence VARCHAR(255) NOT NULL,
  accuracy_rating INTEGER NOT NULL,
  communication_rating INTEGER NOT NULL,
  cleanliness_rating INTEGER NOT NULL,
  location_rating INTEGER NOT NULL,
  check_in_rating INTEGER NOT NULL,
  value_rating INTEGER NOT NULL,
  overall_rating INTEGER NOT NULL
);

CREATE TABLE roomTable (
  id INTEGER NOT NULL PRIMARY KEY UNIQUE,
  name VARCHAR(64)
);
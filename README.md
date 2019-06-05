# Social-Inn Reviews

Social-Inn is an online marketplace for users to book or offer lodging. This module displays all reviews associated with a particular room. 

## Related Projects

  - https://github.com/social-inn/bookings
  - https://github.com/social-inn/Recommeded-homes

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

Parameters:

room_id: integer,
review: {
  "id": integer,
  "name": string,
  "gender": integer,
  "profilePicNum": integer,
  "date": string,
  "sentence": string,
  "accuracy_rating": integer,
  "communication_rating": integer,
  "cleanliness_rating": integer,
  "location_rating": integer,
  "check_in_rating": integer,
  "value_rating": integer,
  "overall_rating": integer
}

RESTful API Routes:

Type: GET
Route: '/reviews/:room_id'
Description: Responds with array of all existing reviews for the given room id
Success response: 201 status code 
Fail response: 500 status code

Type: POST
Route: '/reviews'
Description: Saves a new room review to the database
Success response: 201 status code 
Fail response: 500 status code

Type: PUT
Route: '/reviews/:room_id'
Description: Updates an existing room review with the given room id in the database
Success response: 204 status code 
Fail response: 500 status code

Type: DELETE
Route: '/reviews/:room_id'
Description: Deletes a review with the given room id from the database
Success response: 204 status code
Fail response: 500 status codee

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run bulbasaur
npm run react-dev
npm start
```


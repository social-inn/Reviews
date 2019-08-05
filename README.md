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

Room Schema:
``` javascript
room_id: integer
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
```
RESTful API Routes:
``` 
Method: GET
URL: '/reviews/:room_id'
URL Params: room_id = [integer]
Description: Responds with array of all existing reviews for the given room id
Success response: 201 status code 
Fail response: 500 status code

Method: POST
URL: '/reviews/:room_id'
URL Params: room_id = [integer]
Description: Saves a new room review to the database
Success response: 201 status code 
Fail response: 500 status code

Method: PUT
URL: '/reviews/:room_id'
URL Params: room_id = [integer]
Description: Updates an existing room review with the given room id in the database
Success response: 204 status code 
Fail response: 500 status code

Method: DELETE
URL: '/reviews/:room_id'
URL Params: room_id = [integer]
Description: Deletes a review with the given room id from the database
Success response: 200 status code
Fail response: 500 status code
```

Sample Call:
``` javascript
app.get('/reviews/:room_id', (req, res) => {
  mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true });
  const target = {room_id: req.params.room_id};
  db.Reviews.find(target)
    .then((data) => {
      mongoose.connection.close();
      res.status(200).send(data);
    })
    .catch((err) => {
      mongoose.connection.close();
      res.status(500).send("Fail to fetch");
    })
});
```

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

brew tap loadimpact/k6
brew install k6
brew install grafana
brew install influxdb
```


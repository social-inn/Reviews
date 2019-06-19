import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1000,  //users
  duration: "180s"
  // rps: 1000
};

export default function() {
  var random = Math.floor(Math.random() * 1000000)
  let res = http.get(`http://localhost:3004/reviews/${random}`);
  check(res, {
    "success": (r) => r.status == 200
  });
};

// export default function() {
//   var random = Math.floor(Math.random() * 1000000)
//   let res = http.post(`http://localhost:3004/reviews/${random}`);
//   check(res, {
//     "success": (r) => r.status == 201
//   });
// };
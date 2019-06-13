import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "10s"
};

export default function() {
  var random = Math.floor(Math.random() * 1000000)
  let res = http.get(`http://localhost:3004/reviews/${random}`);
  check(res, {
    "success": (r) => r.status == 200
  });
};
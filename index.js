const express = require("express");

const app = express();

const x = "hello";
const object = {
  one: 1,
  two: 2,
};
console.log(x);

app.listen(4000, () => console.log("App Listening on 4000"));

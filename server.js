var password = "password"
const express = require("express");
const app = express();

// fro sast
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "supersecret",  // This will likely be flagged
  database: "testdb"
});

connection.connect();

const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: 123 }, 'mysecretkey'); // Hardcoded secret

//

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log("Listening on " + port);
});

module.exports = app;
// for pull wf check

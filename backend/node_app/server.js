const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const API_PORT = 3001;
const app = express();
var fs = require("fs");
const router = express.Router();
var appConfig = require("./config.js");

//MongoDB database
const dbRoute =
  "mongodb+srv://@testcluster-8kifl.azure.mongodb.net/test?retryWrites=true&w=majority";
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Global Express headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

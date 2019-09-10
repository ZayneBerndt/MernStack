const express = require("express");
const bodyParser = require("body-parser");
const API_PORT = 3001;
const app = express();
var fs = require("fs");
const router = express.Router();

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

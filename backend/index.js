const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const config = require("./config-local.json");
const listRouter = require("./modules/api/lists/router");
const movieRouter = require("./modules/api/movies/router");

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );

  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use("/api/lists", listRouter);
app.use("/api/movies", movieRouter);

app.use(express.static("./public"));

app.get("*", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

mongoose.connect(config.mongoPath, err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

const port = process.env.PORT || 6969;

app.listen(port, err => {
  if (err) console.log(err);
  console.log("Server started at port " + port);
});

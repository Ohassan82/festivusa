const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const axios = require("axios");
const mongodb = require("mongodb");
const path = require("path")
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  return res.json({message: "Welcome to the FESTIVUS API"});
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_8d4vh4fb:Iainsam13&@ds149365.mlab.com:49365/heroku_8d4vh4fb") 

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

//mongodb://heroku_8d4vh4fb:eh6saeqn67oao5ig4f5vk1er2c@ds149365.mlab.com:49365/heroku_8d4vh4fb
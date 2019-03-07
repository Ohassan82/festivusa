const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_8d4vh4fb:iain1112.mlab.com:49365/heroku_8d4vh4fb") 
  
  const userSeed = [
    {
        firstName: "Fred",
        lastName: "Fredson",
        email: "yeehaa@gmail.com",
        userName: "howdy",
        password: "abcd1234"
    },
    {
        firstName: "Wilma",
        lastName: "Wonderful",
        email: "funstuff@gmail.com",
        userName: "wilmasworld",
        password: "aaaa4444"
    }
]
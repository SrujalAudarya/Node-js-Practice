const mongos = require('mongoose');

mongos.connect('mongodb://localhost:27017/librarydb').
  then(() => {
    console.log("Connected to MongoDB successfully.");
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = mongos;
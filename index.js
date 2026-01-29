const mongos = require('mongoose');
const express = require('express');

const userRoutes = require('./routes/userRoutes');

mongos.connect('mongodb://localhost:27017/librarydb').
  then(() => {
    console.log("Connected to MongoDB successfully.");
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Welcome </h1>")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
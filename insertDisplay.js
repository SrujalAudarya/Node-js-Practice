const Address = require('mongos');
const mongos = require('./connection');
const express = require('express');

const app = express();

//create user schema

const user = new mongos.Schema({
    name: String,
    age: Number,
    city: String,
    salary: Number,
    email: String,
    password: String
});

//create user model

const User = mongos.model('users', user);

//alter schema to add address field
user.add({
    address: String
});

//add document
// const userData = new User({
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     salary: 60000,
//     email: "xyz@gmail.com",
//     password: "password123",
//     address: "123 Main St, New York, NY"
// });

// userData.save().then(() =>{
//     console.log("User data inserted successfully.");
// }).catch((err) => {
//     console.error("Error inserting user data:", err);
// });

User.find().then((data) => {
    app.get('/users',(req, res) => {
        res.json(data);
    })
    console.log("user data:", data);
}).catch((err) => {
    console.error("Error retrieving user data:", err);
});

User.findOne({name: "John Doe"}).
then((data) => {
    app.get('/user', (req, res) =>{
        res.json(data);
    })
}).catch((err) => {
    console.error("Error retrieving user data:", err);
});

User.updateOne({name: "John Doe"}, {$set: {city: "Los Angeles"}}).then((data) => {
    app.get('/updateUser', (req, res) =>{
       res.json(data);
    })
    console.log("User data updated successfully.");
}).catch((err) => {
    console.error("Error updating user data:", err);
});

// User.deleteOne({name: "John Doe"}).then(() =>{
//     console.log("User data deleted successfully.");
// }).catch((err) => {
//     console.error("Error deleting user data:", err);
// });

// display schema
app.get('/displaySchema', (req, res) => {
    res.json(user);
});

//server listening
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});





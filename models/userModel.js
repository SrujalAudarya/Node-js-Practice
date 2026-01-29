//create schema
const mongos = require('mongoose');

const userSchema = new mongos.Schema({
    name:{
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default: 'defaultpassword'
    }
});

const User = mongos.model('User', userSchema);

module.exports = User;
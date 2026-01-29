const User = require('../models/userModel');

exports.createUser = async (req, res) =>{
    try{
        // const {name, age, email, password} = req.body;
        // const newUser = new User({name, age, email, password});
        // await newUser.save();

        const newUser = new User(req.body);
        await newUser.save();

        // const newUser = User.create(req.body);
        res.status(201).send({message: "User created successfully", userId: newUser._id});
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}

exports.getAllUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).send({message: "Internal Server Error"});
    }
}
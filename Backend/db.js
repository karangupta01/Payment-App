// Purpose: This file is used to store configuration variables for the application.
// It uses the dotenv package to load environment variables from a .env file.
const mongoose = require('mongoose');
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

   const userSchema = new mongoose.Schema({
       username :{
           type: String,
           required: true,
           unique: true,
           trim: true,
           lowercase: true,
           minLength: 3,
           maxLength: 30
       },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};  
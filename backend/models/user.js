const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, { collection: 'users', timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
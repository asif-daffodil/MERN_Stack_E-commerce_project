const User = require("../models/user");
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name = '', email = '', password='' } = req.body || {};
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        res.status(400).json({ error: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character' });
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BYCRYPT_SALT_ROUNDS));
    if(!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required' });
    }
    try {
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.status(201).json({ message: 'User registered successfully', newUser, token });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user', details: error.message });
    }
}

const checkAuth = (req, res) => {
    const { authorization = "" } = req.headers || {};
    if(!authorization) {
        res.status(400).json({ error: 'Please provide the authorization token' })
    }else if(!authorization.startsWith('Bearer ')) {
        res.status(400).json({ error: 'Invalid authorization format' });
    }

    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
        if(err) {
            res.status(403).json({ error: 'Forbidden' });
        } else {
            res.status(200).json({ message: 'Authorized', authData });
        }
    });
}

module.exports = { register, checkAuth };
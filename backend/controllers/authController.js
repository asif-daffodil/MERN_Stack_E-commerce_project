const User = require("../models/user");

const register = async (req, res) => {
    const { name = '', email = '', password='' } = req.body || {};
    if(!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required' });
    }
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user', details: error.message });
    }
}

module.exports = { register };
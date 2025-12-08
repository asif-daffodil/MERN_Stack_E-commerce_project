const User = require("../models/user");

const updateProfile = async (req, res) => {
    const { name = '', email = '' } = req.body || {};
    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
        const userId = req.user.id; // Assuming user ID is available in req.user
        await User.findByIdAndUpdate(userId, { name, email });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile', details: error.message });
    }
}

module.exports = { updateProfile };
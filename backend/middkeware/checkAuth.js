const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
    const { authorization = "" } = req.headers || {};
    if(!authorization) {
        return res.status(400).json({ error: 'Please provide the authorization token' })
    }
    try {
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

module.exports = isAuthenticated;
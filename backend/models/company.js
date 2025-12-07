const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        default: 'BYETS'
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        default: 'Dhaka, Bangladesh'
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        default: 'info@byets.com'
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        default: '+880123456789'
    }
}, { collection: 'company' });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
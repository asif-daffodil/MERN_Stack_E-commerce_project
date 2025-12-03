const Company = require('../model/company');

const getCompanyDetails = async (req, res) => {
    try {
        const company = await Company.findOne({});
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch company details' });
    }
}

module.exports = getCompanyDetails;
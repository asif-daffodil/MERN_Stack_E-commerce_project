const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

const mongoose = require('mongoose');
const Company = require('./models/company');

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log('MongoDB connected successfully');
        });
    } catch (error) {
        console.log('MongoDB connection failed:', error.message);
    }
};
mongoConnect();

const apiVersion = process.env.VERSION;
const baseApiUrl = `/api/v${apiVersion}`;


const companyDetailsRoute = require('./routes/frontend/companyDetails');
app.use(baseApiUrl, companyDetailsRoute);

const authRouter = require('./routes/frontend/authRouter');
app.use(baseApiUrl, authRouter);

const userRouter = require('./routes/frontend/userRouter');
app.use(baseApiUrl, userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const expenseRoute = require('./routes/expense-routes');
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use('/api/expense', expenseRoute);

app.use((req, res, next) => {
    throw new HttpError('Could not find such route', 404);
});

app.use((error, req, res, next) => {
    if(res.headerSend) {
        // if the error is handled
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'unknown error occured' });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000);
        console.log(`server started on port ${process.env.PORT || 5000}`);
    })
    .catch((err) => { console.log(err); });
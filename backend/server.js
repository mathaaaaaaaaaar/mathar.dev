const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URL } = require('./config/mongo.js');
const path = require('path');
const { Subscriber } = require('./models/subscriberModel.js');
const subscribeRoute = require('./routes/newsletterRoute.js');
const cors = require('cors');

const app = new express();

app.use(express.json());

app.use(cors());

app.get('/health-check', (req, res) => {
    res.status(200).send("Server works");
});

app.use('/subscribe-newsletter', subscribeRoute);

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to database');

        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
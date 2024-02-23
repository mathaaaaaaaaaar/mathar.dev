const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URL } = require('./config/mongo.js');
const path = require('path');
const Subscriber = require('./models/subscriberModel.js');

const app = new express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Server works");
});

app.post('/', async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(400).send("Email is required");
        }

        const newSubscriber = new Subscriber({
            email: req.body.email,
        });

        const subscriber = await Subscriber.create(newSubscriber);

        return res.status(201).send(subscriber);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error subscribing");
    }
});

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
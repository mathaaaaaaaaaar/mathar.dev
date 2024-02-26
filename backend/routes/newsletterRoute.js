const express = require('express');
const { Subscriber } = require('../models/subscriberModel.js');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(400).send("Email is required");
        }

        const newSubscriber = {
            email: req.body.email,
        };

        const subscriber = await Subscriber.create(newSubscriber);

        return res.status(201).send(subscriber);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error subscribing");
    }
});

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find({});

        return res.status(200).json(subscribers);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error getting subscribers");
    }
});

module.exports = router;
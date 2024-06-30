const express = require('express');
const { ContactPerson } = require('../backend/models/contactPersonModel.js');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.reason || !req.body.message) {
            return res.status(400).send("All the fields are required");
        }

        const newContactPerson = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            reason: req.body.reason,
            message: req.body.message
        };

        const contactPerson = await ContactPerson.create(newContactPerson);

        return res.status(201).send(contactPerson);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error Submitting Form");
    }
});

router.get('/', async (req, res) => {
    try {
        const contactPerson = await ContactPerson.find({});

        return res.status(200).json(contactPerson);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error getting contacts");
    }
});

module.exports = router;
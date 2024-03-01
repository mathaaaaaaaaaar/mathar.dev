const mongoose = require("mongoose");

const contactPersonSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        reason: String,
        message: String
    }
);

const ContactPerson = mongoose.model("ContactPerson", contactPersonSchema);

module.exports = { ContactPerson };
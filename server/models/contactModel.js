const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactModal = new Schema(
    {
        company: {
            type: String,
        },
        contact: {
            type: String,
            required: true  // Corrected from 'require' to 'required'
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }
);

const submitContact = mongoose.model('contactme', contactModal);
module.exports = submitContact;

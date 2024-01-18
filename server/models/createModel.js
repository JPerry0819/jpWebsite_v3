const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountModel = new Schema(
    {
        name: {
            type: String,
            required: true, // Corrected from 'require' to 'required'
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
        },
        company: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const newAccount = mongoose.model('account', accountModel);
module.exports = newAccount;

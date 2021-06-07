const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        personalCode: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        from: {
            type: String,
            required: false
        },
        to: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Worker = mongoose.model('Worker', schema)

module.exports = Worker;
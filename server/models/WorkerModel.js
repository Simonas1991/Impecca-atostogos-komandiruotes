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
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        type: {
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
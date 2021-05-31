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
        }
    },
    {
        timestamps: true,
        // strict: false // Šis nustatymas leidžia įdėti bet kokias papildomas savybes
    }
);

const Worker = mongoose.model('Worker', schema)

module.exports = Worker;
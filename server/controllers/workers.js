const mongoose = require('mongoose');
const Worker = require('../models/WorkerModel');

const getWorkers = (req, res) => {
    Worker.find()
        .then(workers => res.status(200).json(workers))
        .catch(err => res.status(400).json('Error: ' + err));
};

const postWorker = (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const personalCode = req.body.personalCode;
    const address = req.body.address;
    const number = req.body.number;
    const email = req.body.email;

    const newWorker = new Worker({ name, surname, personalCode, address, number, email })

    newWorker.save()
        .then(() => res.status(200).json('Worker added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

const patchWorker = (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Wrong id '${id}' format`);
    Worker.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(200).json('Worker updated'))
        .catch(err => res.status(400).json('Error ' + err))
}

const deleteWorker = (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Wrong id '${id}' format`);
    Worker.findByIdAndDelete(id)
        .then(() => res.status(200).json('Worker deleted'))
        .catch(err => res.status(404).json('Error: ' + err))
}

module.exports = {
    getWorkers,
    postWorker,
    patchWorker,
    deleteWorker
}
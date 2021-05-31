const mongoose = require('mongoose');
const WorkerModel = require('../models/WorkerModel');

const getWorkers = (req, res) => {
    const workersDocuments = WorkerModel.find()
    console.log(workersDocuments)
    res.status(200).json();
}

const postWorker = (req, res) => {
    res.status(200).json('Add worker');
}

const patchWorker = (req, res) => {
    res.status(200).json('Update worker');
}

const deleteWorker = (req, res) => {
    res.status(200).json('Delete worker');
}

module.exports = {
    getWorkers,
    postWorker,
    patchWorker,
    deleteWorker
}
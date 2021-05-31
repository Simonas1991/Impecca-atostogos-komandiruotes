const getWorkers = (req, res) => {
    res.status(200).json('Workers');
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
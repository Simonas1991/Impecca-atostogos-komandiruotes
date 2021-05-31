const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Workers')
});

router.post('/', (req, res) => {
    res.send('Add worker')
});

router.patch('/:id', (req, res) => {
    res.send('Update worker')
});

router.delete('/:id', (req, res) => {
    res.send('Delete worker')
});

module.exports = router;
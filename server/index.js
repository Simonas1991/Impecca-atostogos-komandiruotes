const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path: 'server/.env' });
const workersRouter = require('./routes/workers');

const server = express();
const { SERVER_PORT } = process.env;

// middleware
server.use(cors());
server.use(morgan('tiny'));
server.use(express.json());

// Additional routes

server.use('/workers', workersRouter)

server.get('/', (req, res) => {
    res.send('Serveris veikia')
});

server.listen(SERVER_PORT, () => {
    console.log(`Impecca server is running on http://localhost:${SERVER_PORT}`)
});
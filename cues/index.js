Imports
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

//Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

//PSUEDO DB
const cues = {};

//Create Cue
app.post('/cues/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { maker } = req.body;     //TODO: Add More Specs To Cue

    cues[id] = {
        id,
        maker
    }

    //TODO: Send Event To Event-Bus

    res.status(201).send(cues[id]);
});

//Handle Incoming Events
app.post('/events', (req, res) => {
    console.log('Received Event:', req.body.type);
    res.send({});
});

//Start Server
const port = 4000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
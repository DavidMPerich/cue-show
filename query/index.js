//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

//Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

//PSUEDO DB
const cues = {};

//TODO: Write Handle Event
const handleEvent = (type, data) => {
    if (type === 'CueCreated') {
        const { id, maker } = data;
        cues[id] = { id, maker, offers: [] };
    }
    if (type === 'OfferCreated') {
        const { id, content, cueId } = data;
        const cue = cues[cueId];
        cue.offers.push({ id, content });
    }
};

//Index Page
app.get('/cues', (req, res) => {
    res.send(cues);
});

//Handle Incoming Events
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    handleEvent(type, data);
    res.send({});
});

//Start Server
const port = 4002;
app.listen(port, () => {
    console.log('Listening on port', port);
});
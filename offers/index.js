//Imports
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

//Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Psuedo DB
const offersByCueId = {};

//Index Page??
app.get('/cues/:id/offers', (req, res) => {
    res.send(offersByCueId[req.params.id] || []);
});

//Create Offer
app.post('/cues/:id/offers', async (req, res) => {
    const offerId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const offers = offersByCueId[req.params.id] || [];
    offers.push({id: offerId, content});
    offersByCueId[req.params.id] = offers;

    //TODO: Send Event To Event-Bus
});

//Handle Incoming Events
app.post('/events', (req, res) => {
    console.log('Received Event:', req.body.type);
    res.send({});
});

//Start Server
const port = 4001;
app.listen(port, () => {
    console.log('Listening on port', port);
});


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

//Create Offer
app.post('/cues/:id/offers', async (req, res) => {
    const offerId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const offers = offersByCueId[req.params.id] || [];
    offers.push({id: offerId, content});
    offersByCueId[req.params.id] = offers;

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'OfferCreated',
        data: {
            id: offerId,
            content,
            cueId: req.params.id
        }
    });

    res.status(201).send(offers);
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


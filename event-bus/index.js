//Imports
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

//Middleware
const app = express();
app.use(bodyParser.json());

//Psuedo DB
const events = [];

//Send Events To All Services
app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);

    axios.post('http://cues-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://offers-srv:4001/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://query-srv:4002/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK' });

});

//Index
app.get('/events', (req, res) => {
    res.send(events);
});

//Start Server
const port = 4005;
app.listen(port, () => {
    console.log('Listening on port', port);
});
//Imports
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

//Middleware
const app = express();
app.use(bodyParser.json());

//Psuedo DB
const events = [];

//Events
app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    //TODO: Send Events To Each Service

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
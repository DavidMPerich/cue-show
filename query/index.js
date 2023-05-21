//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

//PSUEDO DB
const cues = {};

//TODO: Write Handle Event
const handleEvent = () => {

};

//Index Page
app.get('/cues', (req, res) => {
    res.send(cues);
});

//Handle Incoming Events
app.post('/events', (req, res) => {
    console.log('Received Event:', req.body.type);
    res.send({});
});

//Start Server
const port = 4002;
app.listen(port, () => {
    console.log('Listening on port', port);
});
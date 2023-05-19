const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//PSUEDO DB
const cues = {};

app.get('/', (req, res) => {
    res.send(cues);
});

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


//Start Server
const port = 4000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
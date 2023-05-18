const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Offers Service');
});

const port = 4000;

app.listen(port, () => {
    console.log('Listening on port', port);
});


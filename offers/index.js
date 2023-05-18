const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Offers Service');
});

const port = 4001;

app.listen(port, () => {
    console.log('Listening on port', port);
});


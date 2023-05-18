const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('My App');
});

const port = 3000;

app.listen(port, () => {
    console.log('Listening on port', port);
});
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Query Service');
});

const port = 4002;

app.listen(port, () => {
    console.log('Listening on port', port);
})
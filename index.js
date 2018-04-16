const express = require('express');

var app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Started on port 3000.');
});

module.exports = {app};
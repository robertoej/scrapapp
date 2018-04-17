const express = require('express');

var app = express();

app.get('/teste', (req, res) => {
    res.send('Funciona!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.');
});
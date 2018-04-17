# Scrapapp
## Primeiros Passos
1. `sudo apt-get update`
2. `sudo apt-get install nodejs`
3. `sudo apt-get install npm`
4. `mkdir scrapapp`
5. `cd scrapapp`
6. `npm init`
## Realizando uma simples requisição HTTP
1. `npm i request --save`
2. Criar o arquivo `request.js` dentro do diretório `scrapapp` com o seguinte conteúdo: 
```javascript
const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.log('Erro:', error);
  console.log('Código HTTP:', response && response.statusCode);
  console.log('Corpo da Resposta:', body);
});
```
3. Executar *script* utilizando o comando `node request.js`.
## Criando um servidor HTTP
1. `npm i express --save`
2. Criar o arquivo `server.js` dentro do diretório `scrapapp` com o seguinte conteúdo: 
```javascript
const express = require('express');

var app = express();

app.get('/teste', (req, res) => {
    res.send('Funciona!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000.');
});
```
3. Executar *script* utilizando o comando `node server.js`.
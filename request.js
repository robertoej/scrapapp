const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.log('Erro:', error); // Imprime erro, caso ocorra.
  console.log('Código HTTP:', response && response.statusCode); // Imprime o código HTTP de resposta.
  console.log('Corpo da Resposta:', body); // Imprime a o corpo reposta da requisição HTTP.
});
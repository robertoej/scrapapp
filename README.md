# Web Scraping com Node.js e Ubuntu
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
4. Acessar o endereço `localhost:3000/teste` no browser.
## Como testar seu serviço HTTP
1. `npm -i mocha -g`
2. `npm i expect nodemon supertest --save-dev`
3. Adicionar o conteúdo `module.exports = {app};` no final do arquivo `server.js`.
3. `mkdir test`
4. Criar um arquivo com nome `server.test.js` com o seguinte conteúdo:
```javascript
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server')

describe('GET /teste', () => {
    it('deve retornar "Funciona"', (done) => {
        request(app)
            .get('/teste')
            .expect(200)
            .expect((res) => {
                expect(res.text).toBe('Funciona!');
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
});
```
5. Executar testes utilizando o comando `mocha tests/*.test.js`.
## Usando promessas (*promise*)
1. Criar o arquivo `promise.js` dentro do diretório `scrapapp` com o seguinte conteúdo: 
```javascript
// promessas podem ser cumpridas ou rejeitadas apenas uma vez,
// isto é, se cumprir primeiro, não é mais possível rejeitar, e vice-versa. 
var promessa = new Promise((cumprir, rejeitar) => {
    setTimeout(() => {
        // cumprir('Promessa cumprida.');
        rejeitar('Promessa não cumprida.');
    }, 2500);
});

promessa.then((mensagem) => {
    // primeiro argumento de then é chamsado apenas se a promessa é cumprida.
    console.log(`Sucesso: ${mensagem}`);
}, (mensagem) => {
    // segundo argumento de then é chamado apenas se a promessa NÃO é cumprida.
    console.log(`Falha: ${mensagem}`);
});

// promessa é dada como finalizada sempre que a mesma é cumprida ou rejeitada.

// promessas podem ser aninhadas da seguinte forma.
var somaAssincrona = (a, b) => {
    return new Promise((cumprir, rejeitar) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                cumprir(a + b);
            } else {
                rejeitar('Argumentos devem ser números.');
            }
        }, 2500);
    });
};

somaAssincrona(4, 5).then((resultado) => {
   console.log(`Sucesso 1: ${resultado}.`);
   return somaAssincrona(resultado, 1);
}, (erro) => {
    console.log(`Falha 1: ${erro}.`);
}).then((resultado) => {
    console.log(`Sucesso 2: ${resultado}.`);
}, (erro) => {
    console.log(`Falha 2: ${erro}.`)
});

somaAssincrona(4, '5').then((resultado) => {
    console.log(`Sucesso 3: ${resultado}.`);
    return somaAssincrona(resultado, 1);
 }).then((resultado) => {
     console.log(`Sucesso 4: ${resultado}.`);
 }).catch(erro => {
     console.log(`Falha 3: ${erro}.`)
 });
 ```
 2. Executar script utilizando o comando `node promise.js`.
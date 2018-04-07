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
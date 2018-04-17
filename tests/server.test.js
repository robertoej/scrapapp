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

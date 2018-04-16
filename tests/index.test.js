const expect = require('expect');
const request = require('supertest');

const {app} = require('./../index')

describe('Hello World', () => {
    it('should return helloworld', (done) => {
        request(app)
            .get('/hello')
            .expect(200)
            .expect((res) => {
                expect(res.text).toBe('Hello World!');
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                done();
            });
    });
});

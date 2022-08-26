/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

test('initial test', () => {
  expect(3).toBe(3);
});

describe('Test profile routes', () => {
  test('/profile/id route should return status code of 200 and a response of type json', (done) => {
    request(app)
      .get('/profile/1')
      .expect('content-type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });
});

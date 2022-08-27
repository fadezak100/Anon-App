/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');
const connection = require('../src/database/config/connection');
const build = require('../src/database/config/build');
const { getProfilesQuery, insertProfileQuery } = require('../src/database/queires/index');

beforeAll(() => build());
afterAll(() => connection.end());

describe('Database test', () => {
  test('get all users', () => getProfilesQuery().then((data) => {
    expect(data.rows.length).toBe(2);
  }));

  test('Insert  a new profile into profiles', () => insertProfileQuery({ username: 'sami', password: '123' })
    .then((data) => {
      getProfilesQuery().then((profiles) => {
        expect(profiles.rows.length).toBe(3);
        expect(profiles.rows[2].username).toBe('sami');
      });
    }));

  test('test returning all data after inserting a new profile', () => {
    insertProfileQuery({ username: 'ahmed', password: '123' }).then((data) => {
      expect(data.rows[0].username).toBe('ahmed');
    });
  });
});

describe('Test profile routes', () => {
  test('/profile route should return status code of 200 and a response of type json', (done) => {
    request(app)
      .get('/profile')
      .expect('content-type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });
});

describe('Sign in tests', () => {
  test('test /sign-in route', (done) => {
    request(app)
      .get('/sign-in')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.type).toBe('text/html');
        return done();
      });
  });
});

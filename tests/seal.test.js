const request = require('supertest');
const app = require('../');

describe('seal', () => {
  it('200', (done) => {
    request(app.listen())
      .get('/seal')
      .expect(200)
      .end(() => {
        done();
      });
  });
});

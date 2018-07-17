import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';

chai.use(chaiHttp);

describe('API Endpoints testing', () => {
  describe('GET /', () => {
    it('Should return 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Should return 404 for unknown routes', (done) => {
      chai.request(app)
        .get('/unknown/route')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});

describe('Get all entries', () => {
  it('Should get all entries', (done) => {
    chai.request(app)
      .get('/api/v1/allentries')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

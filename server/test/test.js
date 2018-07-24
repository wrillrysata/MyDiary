import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';

/* eslint-disable no-unused-vars */
const should = chai.should();

chai.use(chaiHttp);

describe('API Endpoints testing', () => {
  describe('GET /', () => {
    it('Should return 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it('Should return 404 for unknown routes', (done) => {
      chai.request(app)
        .get('/invalid/route')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});

describe('Get entries', () => {
  it('Should get all entries', (done) => {
    chai.request(app)
      .get('/api/v1/allentries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
  it('It should get one entry', (done) => {
    chai.request(app)
      .get('/api/v1/allentries/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        res.body.should.have.property('note');
        res.body.should.have.property('id');
        done();
      });
  });
});

describe('Modify entry', () => {
  it('It should add an entry', (done) => {
    chai.request(app)
      .post('/api/v1/new/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        res.body.should.have.property('message').eql('Successfully added!');
        done();
      });
  });
  it('Should edit the entry', (done) => {
    chai.request(app)
      .put('/api/v1/edit/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        res.body.should.have.property('message').eql('Successfully updated!');
        done();
      });
  });
});

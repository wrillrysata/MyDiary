import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../app';

chai.use(chaiHttp);
describe('It should redirect to home page', () => {
  it('Should return a welcome text', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
    done();
  });
  it('Should return a 404 for invalid URL', (done) => {
    request(app)
      .get('/unknown/route')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('The URL you entered does not exist');
      });
    done();
  });
});
describe('Authentication tests', () => {
  it('Should signup a user', (done) => {
    const userData = {
      userName: 'Nessa',
      email: 'kunu@gmail.com',
      password: 'ness_',
      confirmPassword: 'ness_'

    };
    request(app)
      .post('/api/v1/auth/signup')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.equal(201);
      });
    done();
  });
  it('Should throw an error when user tries to sign up with invalid email', (done) => {
    const invalidData = {
      userName: 'Ness',
      email: 'jaye1',
      password: '12345',
      confirmPassword: '12345'

    };
    request(app)
      .post('/api/v1/auth/signup')
      .send(invalidData)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Invalid email');
      });
    done();
  });
  it('Should throw an error when user passwords do not match', (done) => {
    const unmatchedData = {
      userName: 'Amaka',
      email: 'makus@gmail.com',
      password: 'koye&',
      confirmPassword: 'koko1'

    };
    request(app)
      .post('/api/v1/auth/signup')
      .send(unmatchedData)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Passwords do not match');
      });
    done();
  });

  it('Should throw an error when user tries to sign up without a username', (done) => {
    const incompleteData = {
      userName: ' ',
      email: 'makus@gmail.com',
      password: 'koye&',
      confirmPassword: 'koye&'

    };
    request(app)
      .post('/api/v1/auth/signup')
      .send(incompleteData)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Please fill in all fields');
      });
    done();
  });
  it('Should throw an error when a user tries sigining in with a wrong password', (done) => {
    const existingUser = {
      email: 'kunu@gmail.com',
      password: 'ness1234',

    };
    request(app)
      .post('/api/v1/auth/login')
      .send(existingUser)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal('Wrong username or password');
      });
    done();
  });
  it('Should log in a user', (done) => {
    const existingUser = {
      email: 'kunu@gmail.com',
      password: 'ness_',

    };
    request(app)
      .post('/api/v1/auth/login')
      .send(existingUser)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Successfully logged in');
        expect(res.body).should.have.property('token');
      });
    done();
  });
});

"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireWildcard(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

describe('It should redirect to home page', function () {
  it('Should return a welcome text', function (done) {
    (0, _supertest.default)(_app.default).get('/').end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
    });
    done();
  });
  it('Should return a 404 for invalid URL', function (done) {
    (0, _supertest.default)(_app.default).get('/unknown/route').end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(404);
      (0, _chai.expect)(res.body.message).to.equal('The URL you entered does not exist');
    });
    done();
  });
});
describe('Authentication tests', function () {
  it('Should signup a user', function (done) {
    var userData = {
      userName: 'Nessa',
      email: 'kunu@gmail.com',
      password: 'ness_',
      confirmPassword: 'ness_'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(userData).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
    });
    done();
  });
  it('Should throw an error when user tries to sign up with invalid email', function (done) {
    var invalidData = {
      userName: 'Ness',
      email: 'jaye1',
      password: '12345',
      confirmPassword: '12345'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(invalidData).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      (0, _chai.expect)(res.body.message).to.equal('Invalid email');
    });
    done();
  });
  it('Should throw an error when user passwords do not match', function (done) {
    var unmatchedData = {
      userName: 'Amaka',
      email: 'makus@gmail.com',
      password: 'koye&',
      confirmPassword: 'koko1'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(unmatchedData).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      (0, _chai.expect)(res.body.message).to.equal('Passwords do not match');
    });
    done();
  });
  it('Should throw an error when user tries to sign up without a username', function (done) {
    var incompleteData = {
      userName: ' ',
      email: 'makus@gmail.com',
      password: 'koye&',
      confirmPassword: 'koye&'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/signup').send(incompleteData).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      (0, _chai.expect)(res.body.message).to.equal('Please fill in all fields');
    });
    done();
  });
  it('Should throw an error when a user tries sigining in with a wrong password', function (done) {
    var existingUser = {
      email: 'kunu@gmail.com',
      password: 'ness1234'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(existingUser).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(401);
      (0, _chai.expect)(res.body.message).to.equal('Wrong username or password');
    });
    done();
  });
  it('Should log in a user', function (done) {
    var existingUser = {
      email: 'kunu@gmail.com',
      password: 'ness_'
    };
    (0, _supertest.default)(_app.default).post('/api/v1/auth/login').send(existingUser).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      (0, _chai.expect)(res.body.message).to.equal('Successfully logged in');
      (0, _chai.expect)(res.body).should.have.property('token');
    });
    done();
  });
});
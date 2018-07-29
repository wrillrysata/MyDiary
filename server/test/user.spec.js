/* eslint-disable */
/** Gift */

import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../app';
import db from '../helpers/dbHelper';
import userMock from './mock/userMock';
chai.use(chaiHttp)
const { UserInfo } = userMock;

describe('authentication test', () => {
    before((done) => {
      db.query('DELETE FROM users');
      done();
    });
    it('should be able to sign up a new user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .type('form')
          .send(UserInfo)
          .end((err, res) => {
            expect(err).to.not.exist;
            expect(res.status).to.equal(201);
            expect(res).to.be.an('object');
            expect(res).to.have.property('message');
            expect(res.type).to.equal('application/json');
            expect(res.body.message).to.equal('User registration successful');
            expect(res.body.token).to.be.a('string');
          });
        done();
      });
    })

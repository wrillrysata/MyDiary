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
  it('should be able to sign up a new user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .type('form')
          .send(UserInfo)
          .end((err, res) => {
            expect(err).to.not.exist;
          });
        done();
      });
    })

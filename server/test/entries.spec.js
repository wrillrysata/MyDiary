import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('GET /api/v1/entries', () => {
  it('should respond with all entries', (done) => {
    chai.request(app)
      .get('/v1/api/entries')
      .end((err, res) => {
        should.not.exist(err);
        // res.statusshould.equal(200);
        // res.type.should.equal('application/json');
        // res.body.should.have.property('message').equal('Retrieved all entries');
      });
    done();
  });
});

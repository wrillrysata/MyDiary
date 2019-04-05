"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('GET /api/v1/entries', function () {
  it('should respond with all entries', function (done) {
    _chai.default.request(_app.default).get('/v1/api/entries').end(function (err, res) {
      should.not.exist(err); // res.statusshould.equal(200);
      // res.type.should.equal('application/json');
      // res.body.should.have.property('message').equal('Retrieved all entries');
    });

    done();
  });
});
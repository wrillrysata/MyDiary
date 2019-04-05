"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#the-actual-node-application-serverjs */
_dotenv.default.config();

var secret = process.env.SECRET_KEY;
var _default = {
  checkToken: function checkToken(req, res, next) {
    var token = req.headers.authorization;
    if (!token) return res.status(401).send({
      auth: false,
      message: 'Please login first'
    });

    _jsonwebtoken.default.verify(token, secret, function (err, decoded) {
      if (err) return res.status(500).send({
        auth: false,
        message: 'Invalid token.'
      });
      req.decoded = decoded;
    });

    next();
  }
};
exports.default = _default;
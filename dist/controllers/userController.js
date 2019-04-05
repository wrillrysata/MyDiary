"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbHelper = _interopRequireDefault(require("../helpers/dbHelper"));

var _bcrypt = _interopRequireDefault(require("../helpers/bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* https://mherman.org/blog/2015/02/12/postgresql-and-nodejs/ */
_dotenv.default.config();

var secret = process.env.SECRET_KEY;
var _default = {
  createUser: function createUser(req, res) {
    var _req$body = req.body,
        userName = _req$body.userName,
        email = _req$body.email,
        password = _req$body.password;
    var sql = 'INSERT INTO users (username, email, password) values($1, $2, $3) RETURNING *';

    _dbHelper.default.query(sql, [userName, email, _bcrypt.default.hashPassword(password)], function (err) {
      if (err) {
        return res.status(500).json({
          message: 'User registration was not successful, please try again.',
          err: err
        });
      }

      var query = 'SELECT * FROM users WHERE email = $1';

      _dbHelper.default.query(query, [email], function (err, result) {
        if (err) {
          console.log(err);
        }

        var user = result.rows[0];
        var payload = {
          id: user.id
        };

        var token = _jsonwebtoken.default.sign(payload, secret, {
          expiresIn: 1440
        });

        return res.status(201).json({
          message: 'User registration successful',
          token: token
        });
      });
    });
  },
  findUser: function findUser(req, res, next) {
    var userName = req.body.userName;
    var sql = 'SELECT * FROM users WHERE username = $1';

    _dbHelper.default.query(sql, [userName], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'Could not retrieve User'
        });
      }

      var user = result.rows[0];

      if (user) {
        return res.status(409).json({
          message: 'User already exists, please login'
        });
      }

      next();
    });
  },
  loginUser: function loginUser(req, res) {
    var _req$body2 = req.body,
        username = _req$body2.username,
        password = _req$body2.password;
    var sql = 'SELECT * FROM users WHERE username = $1';

    _dbHelper.default.query(sql, [username], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'There was an error while signing in user'
        });
      }

      if (result.rowCount === 0) {
        return res.status(404).json({
          message: 'No user found'
        });
      }

      var user = result.rows[0];

      var rightPassword = _bcrypt.default.comparePassword(password, user.password);

      if (!rightPassword) {
        return res.status(401).json({
          message: 'Wrong username or password'
        });
      }

      var payload = {
        id: user.id
      };

      var token = _jsonwebtoken.default.sign(payload, secret, {
        expiresIn: 1440
      });

      return res.status(200).json({
        message: 'Successfully logged in',
        token: token
      });
    });
  }
};
exports.default = _default;
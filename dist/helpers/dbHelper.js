"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var poolConfig;

if (process.env.NODE_ENV === 'Development') {
  poolConfig = new _pg.Pool({
    connectionString: process.env.DATABASE_URL_DEV
  });
} else if (process.env.NODE_ENV === 'Test') {
  poolConfig = new _pg.Pool({
    connectionString: process.env.DATABASE_URL_TEST
  });
} else {
  poolConfig = new _pg.Pool({
    connectionString: process.env.DATABASE_URL
  });
}

var db = poolConfig;
db.connect(function () {
  console.log('Connection successful');
});
var _default = db;
exports.default = _default;
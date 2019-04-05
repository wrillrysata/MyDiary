"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _dbHelper = _interopRequireDefault(require("../helpers/dbHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class
*/
_dotenv.default.config();

var CreateTableSchema =
/*#__PURE__*/
function () {
  /**
   * @constructor
  */
  function CreateTableSchema() {
    _classCallCheck(this, CreateTableSchema);

    this.pool = _dbHelper.default;
    this.createTables = "CREATE TABLE IF NOT EXISTS users(\n            id serial PRIMARY KEY NOT NULL,\n            username varchar(255) NOT NULL,\n            email varchar(255) NOT NULL,\n            password varchar(255) NOT NULL,\n            created_at timestamp DEFAULT NOW()\n          );\n          \n          CREATE TABLE IF NOT EXISTS entries(\n            id serial PRIMARY KEY NOT NULL,\n            user_id integer NOT NULL, \n            body varchar(255) NOT NULL,\n            created_at timestamp DEFAULT NOW()\n          );\n          \n          CREATE TABLE IF NOT EXISTS notifications(\n            id serial PRIMARY KEY NOT NULL,\n            title varchar(255) NOT NULL,\n            user_id varchar(255) NOT NULL,\n            created_at timestamp DEFAULT NOW(),\n            time timestamp NOT NULL\n          )";
  }

  _createClass(CreateTableSchema, [{
    key: "run",
    value: function run() {
      return this.pool.query(this.createTables).then(function () {// this.pool.end();
      }).catch(function (err) {
        console.log(err);
      });
    }
  }]);

  return CreateTableSchema;
}();

exports.default = CreateTableSchema;
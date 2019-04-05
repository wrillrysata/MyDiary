"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbHelper = _interopRequireDefault(require("../helpers/dbHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getAll: function getAll(req, res) {
    var userId = req.decoded.id;
    var sql = 'SELECT * from entries WHERE user_id =$1';

    _dbHelper.default.query(sql, [userId], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'There was a problem getting entry'
        });
      }

      return res.status(200).json({
        message: 'Retrieved all entries',
        entries: result.rows
      });
    });
  },
  getOne: function getOne(req, res) {
    var id = req.params.id;
    var sql = 'SELECT * from entries WHERE id = $1';

    _dbHelper.default.query(sql, [id], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'Could not get entry'
        });
      }

      return res.status(200).json({
        message: 'Successfully retrieved entry',
        entry: result.rows[0]
      });
    });
  },
  updateEntry: function updateEntry(req, res) {
    var _req$body = req.body,
        id = _req$body.id,
        body = _req$body.body;
    var sql = 'UPDATE entries SET body=$1 WHERE id=$2 RETURNING *';

    _dbHelper.default.query(sql, [body, id], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'Could not update entry'
        });
      }

      return res.status(200).json({
        message: 'Updated entry',
        entries: result.rows[0]
      });
    });
  },
  deleteEntry: function deleteEntry(req, res) {
    var id = req.params.id;
    var sql = 'DELETE from entries WHERE id = $1';

    _dbHelper.default.query(sql, [id], function (err, result) {
      if (err) {
        return res.status(500).json({
          message: 'Could not delete entry'
        });
      }

      return res.status(200).json({
        message: 'Successfully deleted entry'
      });
    });
  },
  addNew: function addNew(req, res) {
    var text = req.body.text;
    var userId = req.decoded.id;
    var sql = 'INSERT into entries (body, user_id) VALUES ($1, $2)';

    _dbHelper.default.query(sql, [text, userId], function (err) {
      if (err) {
        return res.status(500).json({
          message: 'Could not add new entry, try again.'
        });
      }

      return res.status(201).json({
        message: 'Successfully added entry'
      });
    });
  }
};
exports.default = _default;
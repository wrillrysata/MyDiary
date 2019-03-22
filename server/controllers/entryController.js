import db from '../helpers/dbHelper';

export default {
  getAll: (req, res) => {
    const userId = req.decoded.id;
    const sql = 'SELECT * from entries WHERE user_id =$1';
    db.query(sql, [userId],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'There was a problem getting entry',
          });
        }
        return res.status(200).json({
          message: 'Retrieved all entries',
          entries: result.rows
        });
      });
  },
  getOne: (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * from entries WHERE id = $1';
    db.query(sql, [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'Could not get entry',
          });
        }
        return res.status(200).json({
          message: 'Successfully retrieved entry',
          entry: result.rows[0]
        });
      });
  },
  updateEntry: (req, res) => {
    const { id, body } = req.body;
    const sql = 'UPDATE entries SET body=$1 WHERE id=$2 RETURNING *';
    db.query(sql, [body, id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'Could not update entry',
          });
        }
        return res.status(200).json({
          message: 'Updated entry',
          entries: result.rows[0]
        });
      });
  },

  deleteEntry: (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE from entries WHERE id = $1';
    db.query(sql, [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'Could not delete entry',
          });
        }
        return res.status(200).json({
          message: 'Successfully deleted entry'
        });
      });
  },
  addNew: (req, res) => {
    const {
      text
    } = req.body;
    const userId = req.decoded.id;
    const sql = 'INSERT into entries (body, user_id) VALUES ($1, $2)';
    db.query(sql, [text, userId],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: 'Could not add new entry, try again.',
          });
        }
        return res.status(201).json({
          message: 'Successfully added entry'
        });
      });
  }
};

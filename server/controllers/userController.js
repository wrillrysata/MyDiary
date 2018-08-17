
/* https://mherman.org/blog/2015/02/12/postgresql-and-nodejs/ */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import db from '../helpers/dbHelper';
import bcrypt from '../helpers/bcrypt';


dotenv.config();
const secret = process.env.SECRET_KEY;

export default{
  createUser: (req, res) => {
    const {
      userName, email, password
    } = req.body;


    const sql = 'INSERT INTO users (username, email, password) values($1, $2, $3) RETURNING *';
    db.query(
      sql, [userName, email, bcrypt.hashPassword(password)],
      (err) => {
        if (err) {
          return res.status(500).json({
            message: 'User registration was not successful, please try again.',
            err
          });
        }
        const query = 'SELECT * FROM users WHERE email = $1';
        db.query(query, [email],
          (err, result) => {
            if (err) {
              console.log(err);
            }
            const user = result.rows[0];
            const payload = {
              id: user.id
            };
            const token = jwt.sign(payload, secret, {
              expiresIn: 1440,
            });
            return res.status(201).json({
              message: 'User registration successful',
              token
            });
          });
      },
    );
  },
  findUser: (req, res, next) => {
    const {
      email,
    } = req.body;
    const sql = 'SELECT * FROM users WHERE email = $1';
    db.query(
      sql, [email],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'Could not retrieve User',
          });
        }
        const user = result.rows[0];
        if (user) {
          return res.status(409).json({
            message: 'User already exists',
          });
        }
        next();
      },
    );
  },

  loginUser: (req, res) => {
    const {
      email, password,
    } = req.body;
    const sql = 'SELECT * FROM users WHERE email = $1';
    db.query(
      sql, [email],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'There was an error while signing in user',
          });
        }
        if (result.rowCount === 0) {
          return res.status(422).json({
            message: 'No user found'
          });
        }
        const user = result.rows[0];
        const rightPassword = bcrypt.comparePassword(password, user.password);
        if (!rightPassword) {
          return res.status(401).json({
            message: 'Wrong username or password',
          });
        }
        const payload = {
          id: user.id
        };
        const token = jwt.sign(payload, secret, {
          expiresIn: 1440,
        });
        return res.status(200).json({
          message: 'Successfully logged in',
          token,
        });
      }
    );
  },
};

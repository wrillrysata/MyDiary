/* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens#the-actual-node-application-serverjs */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secret = process.env.SECRET_KEY;

export default {
  checkToken: (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send({ auth: false, message: 'Please login first' });

    jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Invalid token.' });
      req.decoded = decoded;
    });
    next();
  }
};
